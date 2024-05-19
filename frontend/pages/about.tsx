import { GetStaticProps } from "next"
import { Trans, useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { NextSeo } from "next-seo"
import Link from "next/link"

const Acknowledgments = () => {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="mb-6 mt-12 text-2xl font-bold">{t("acknowledgements")}</h2>
      <Trans i18nKey={"common:acknowledgements-block"}>
        <p>
          Flathub wouldn&apos;t be possible without the generous support of the
          following organizations and individuals.
        </p>
      </Trans>
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div>
          <h3 className="my-4 text-xl font-semibold">
            {t("organizations-and-infrastructure")}
          </h3>
          <div className="ps-4">
            <ul className="list-outside list-disc text-flathub-dark-gunmetal dark:text-flathub-gainsborow">
              <li>Codethink</li>
              <li>Cloud Native Computing Foundation</li>
              <li>Fastly</li>
              <li>Mythic Beasts</li>
              <li>Prerender.io</li>
              <li>Scaleway</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="my-4 text-xl font-semibold">
            {t("individual-contributors")}
          </h3>
          <div className="ps-4">
            <ul className="list-outside list-disc text-flathub-dark-gunmetal dark:text-flathub-gainsborow">
              <li>Alex Larsson</li>
              <li>Andreas Nilsson</li>
              <li>Arun Raghavan</li>
              <li>Bartłomiej Piotrowski</li>
              <li>Christian Hergert</li>
              <li>Christopher Halse Rogers</li>
              <li>Cosimo Cecchi</li>
              <li>Emmanuele Bassi</li>
              <li>G Stavracas Neto</li>
              <li>Jakub Steiner</li>
              <li>James Shubin</li>
              <li>Joaquim Rocha</li>
              <li>Jorge García Oncins</li>
              <li>Lubomír Sedlář</li>
              <li>Nathan Dyer</li>
              <li>Nick Richards</li>
              <li>Mario Sanchez Prada</li>
              <li>Matthias Clasen</li>
              <li>Michael Doherty</li>
              <li>Robert McQueen</li>
              <li>Zach Oglesby</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

const GetInTouch = () => {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="mb-6 mt-12 text-2xl font-bold">{t("get-in-touch")}</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-14">
        <div className="w-full sm:w-1/2">
          <h3 className="my-4 text-xl font-semibold">{t("press")}</h3>
          <p>{t("press-description")}</p>
          <div>
            <a
              href="https://docs.flathub.org/blog"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {t("read-announcements")}
            </a>
          </div>
          <div>
            <a
              href="https://github.com/flathub-infra/assets"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {t("download-press-kit")}
            </a>
          </div>
          <div>
            <a
              href="mailto:admins@flathub.org"
              className="no-underline hover:underline"
            >
              {t("contact-for-press-inquiries")}
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="my-4 text-xl font-semibold">
            {t("reporting-issues")}
          </h3>
          <p>{t("reporting-issues-description")}</p>
          <div>
            <a
              href="mailto:admins@flathub.org"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {t("report-an-issue")}
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="my-4 text-xl font-semibold">
            {t("developers-and-users")}
          </h3>
          <p>{t("developers-and-users-block")}</p>
          <div>
            <a
              href="https://discourse.flathub.org"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {t("join-discourse-forum")}
            </a>
          </div>
          <div>
            <a
              href="https://matrix.to/#/#flathub:matrix.org"
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {t("chat-on-matrix")}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo
        title={t("about")}
        description={t("about-description")}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_BASE_URI}/about`,
        }}
      />
      <div className="flex max-w-full flex-col">
        <section className={`flex flex-col px-[5%] md:px-[20%] 2xl:px-[30%]`}>
          <h1 className="mt-8 mb-12 text-4xl font-extrabold">
            {t("about-pagename")}
          </h1>
          <Trans i18nKey={"common:about-block"}>
            <p>
              Flathub aims to be the place to get and distribute apps for Linux.
              It is powered by
              <a
                className="no-underline hover:underline"
                href="https://flatpak.org"
                target="_blank"
                rel="noreferrer"
              >
                Flatpak
              </a>{" "}
              which allows Flathub apps to run on almost any Linux distribution.
            </p>

            <p>
              If you are a Linux user, you can use Flathub to gain access to a
              growing collection of Flatpak applications. You just need to
              follow the{" "}
              <Link className="no-underline hover:underline" href="/setup">
                setup instructions
              </Link>
              .
            </p>
          </Trans>
        </section>

        {/* <!-- main content --> */}
        <section className={`flex flex-col px-[5%] md:px-[20%] 2xl:px-[30%]`}>
          <h2 className="mb-6 mt-12 text-2xl font-bold">
            {t("submitting-apps")}
          </h2>
          <Trans i18nKey={"common:submitting-apps-block"}>
            <p>
              App developers can{" "}
              <a
                className="no-underline hover:underline"
                href="https://docs.flathub.org/docs/for-app-authors/submission"
                target="_blank"
                rel="noreferrer"
              >
                submit their applications
              </a>{" "}
              to be distributed to Flathub&apos;s growing user base, thus
              providing a single gateway to the entire Linux desktop ecosystem.
            </p>
            <p>
              At the moment, applications must either be legally redistributable
              or be available as a third party download. However, if you are a
              proprietary app developer and are interested in using Flathub, we
              would love to talk to you.
            </p>
          </Trans>

          <h2 className="mb-6 mt-12 text-2xl font-bold">
            {t("about-app-verification")}
          </h2>
          <Trans i18nKey="about-app-verification-block">
            <h3 className="my-4 text-xl font-semibold">
              What does the checkmark under an app name mean?
            </h3>
            <p>
              Some apps have a checkmark on the app page under the developer
              name. This means the app is published on Flathub by its original
              developer or a third party approved by the developer.
            </p>
            <p>
              Some apps are published by third parties that are unaffiliated
              with the original developer. This is allowed, but such apps are
              not eligible for the checkmark.
            </p>
            <p>
              Next to the checkmark is a link to the developer&apos;s website or
              to their profile on a source code hosting site. Flathub has
              verified the developer&apos;s identity using that link.
            </p>

            <h3 className="my-4 text-xl font-semibold">
              I&apos;m publishing an app on Flathub. How do I get it verified?
            </h3>
            <p>
              First,{" "}
              <Link className="no-underline hover:underline" href="/login">
                log in to Flathub
              </Link>
              . Find &quot;Developer Portal&quot; in the footer of the page.
              Click the app you want to verify then find the
              &quot;Verification&quot; section. The instructions there will walk
              you through the verification process.
            </p>
          </Trans>

          <GetInTouch />

          <Acknowledgments />
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 900,
  }
}

export default About
