import { FunctionComponent, ReactElement } from "react"

import { AppstreamListItem } from "../../types/Appstream"

import ApplicationCard from "./ApplicationCard"
import { useTranslation } from "next-i18next"
import ButtonLink from "../ButtonLink"
import { motion } from "framer-motion"
import clsx from "clsx"

interface PropsWithTitle {
  type: "withTitle"
  href: string
  title: string
  applications: AppstreamListItem[]
  showMore: boolean
  moreText: string
}
interface PropsWithCustomHeader {
  type: "withCustomHeader"
  href: string
  applications: AppstreamListItem[]
  customHeader: ReactElement
  showMore: boolean
  moreText: string
}

const ApplicationSection: FunctionComponent<
  PropsWithCustomHeader | PropsWithTitle
> = (prop) => {
  const { t } = useTranslation()

  if (!prop.applications || !prop.applications.length) return null

  return (
    <div>
      {prop.type === "withTitle" && (
        <header className="mb-3 flex max-w-full flex-row content-center justify-between">
          <h2 className="my-auto text-2xl font-bold">{prop.title}</h2>
        </header>
      )}

      {prop.type === "withCustomHeader" && (
        <div className="mb-3">{prop.customHeader}</div>
      )}

      <div className="grid grid-cols-1 justify-around gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
        {prop.applications.map((app) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            key={app.id}
          >
            <ApplicationCard application={app} />
          </motion.div>
        ))}
      </div>
      {prop.showMore && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          key={prop.moreText}
          className={clsx("flex flex-row justify-center", "mt-5")}
        >
          <ButtonLink
            href={prop.href}
            passHref
            variant="secondary"
            className="rounded-full"
            aria-label={prop.moreText}
            title={prop.moreText}
          >
            {prop.moreText}
          </ButtonLink>
        </motion.div>
      )}
    </div>
  )
}

export default ApplicationSection
