/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { QualityModerationDashboardRowAppstream } from "./qualityModerationDashboardRowAppstream"
import type { QualityModerationDashboardRowInstallsLast7Days } from "./qualityModerationDashboardRowInstallsLast7Days"
import type { QualityModerationStatus } from "./qualityModerationStatus"

export interface QualityModerationDashboardRow {
  appstream?: QualityModerationDashboardRowAppstream
  id: string
  installs_last_7_days?: QualityModerationDashboardRowInstallsLast7Days
  quality_moderation_status: QualityModerationStatus
}
