/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { QualityModerationStatusLastUpdated } from "./qualityModerationStatusLastUpdated"
import type { QualityModerationStatusReviewRequestedAt } from "./qualityModerationStatusReviewRequestedAt"

export interface QualityModerationStatus {
  last_updated: QualityModerationStatusLastUpdated
  not_passed: number
  passed: number
  passes: boolean
  review_requested_at?: QualityModerationStatusReviewRequestedAt
  unrated: number
}
