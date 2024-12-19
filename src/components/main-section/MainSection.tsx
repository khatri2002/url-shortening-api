import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames";

import { shortenUrl } from "../../api/api";
import { Input, Url, Urls } from "./type";
import * as utils from "../../utils/utils";

import commonStyles from "../../commonStyles.module.scss";
import styles from "./MainSection.module.scss";
import {
  IconBrandRecognition,
  IconDetailedRecords,
  IconFullyCustomizable,
} from "../../assets/images";

const MainSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Input>();
  const [loading, setLoading] = useState<boolean>(false);
  const [urls, setUrls] = useState<Urls>([]);

  useEffect(() => {
    setUrls(
      utils.getUrls().map((url: Url) => ({
        ...url,
        copied: false,
      })),
    );
    return () => {};
  }, []);

  const onSubmit: SubmitHandler<Input> = (formData) => {
    setLoading(true);
    shortenUrl(formData.url)
      .then((data) => {
        console.log(data.result_url);
        const url = {
          longUrl: formData.url,
          shortUrl: data.result_url,
          copied: false,
        };
        utils.saveUrl(url);
        setUrls((prev) => [url, ...prev]);
      })
      .catch(() => {
        setError("url", {
          type: "server-error",
          message: "Something went wrong",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(urls[index].shortUrl);

    // update copied to true
    setUrls((prev) =>
      prev.map((url, i) => (i === index ? { ...url, copied: true } : url)),
    );

    // update copied to false after 3 seconds
    setTimeout(() => {
      setUrls((prev) =>
        prev.map((url, i) => (i === index ? { ...url, copied: false } : url)),
      );
    }, 3000);
  };

  return (
    <section className={styles.formContainer}>
      <div className={commonStyles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div
            className={classNames({
              [styles.input]: true,
              [styles.error]: errors.url,
            })}
          >
            <input
              id="link"
              type="text"
              placeholder="Shorten a link here..."
              {...register("url", {
                required: { value: true, message: "Please add a link" },
                pattern: {
                  value:
                    /^(https?:\/\/www\.[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*)$/i,
                  message: "Not a valid link",
                },
              })}
              aria-invalid={errors.url ? "true" : "false"}
            />
            <span role="alert" className={styles.errorText}>
              {errors.url?.message}
            </span>
          </div>
          <button type="submit" disabled={loading}>
            Shorten It!
          </button>
        </form>
        <div className={styles.space} />
        <ul className={styles.linksContainer}>
          {urls.map((url, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.longUrl}>{url.longUrl}</span>
              <span className={styles.separator} />
              <span className={styles.shortUrl}>{url.shortUrl}</span>
              <button
                className={classNames({
                  [styles.btn]: true,
                  [styles.copied]: url.copied,
                })}
                onClick={() => handleCopy(index)}
              >
                {url.copied ? "Copied!" : "Copy"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${commonStyles.container} ${styles.statisticsContainer}`}
      >
        <h2 className={styles.heroTitle}>Advanced Statistics</h2>
        <span className={styles.heroDesc}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={IconBrandRecognition} alt="icon-brand-recognition" />
            </div>
            <span className={styles.title}>Brand Recognition</span>
            <span className={styles.desc}>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </span>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={IconDetailedRecords} alt="icon-detailed-records" />
            </div>
            <span className={styles.title}>Detailed Records</span>
            <span className={styles.desc}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </span>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={IconFullyCustomizable} alt="icon-fully-customizable" />
            </div>
            <span className={styles.title}>Fully Customizable</span>
            <span className={styles.desc}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
