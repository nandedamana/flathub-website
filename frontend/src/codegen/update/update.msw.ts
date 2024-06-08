/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { HttpResponse, delay, http } from "msw"

export const getUpdateUpdatePostMockHandler = () => {
  return http.post("*/update", async () => {
    await delay(1000)
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  })
}

export const getUpdateStatsUpdateStatsPostMockHandler = () => {
  return http.post("*/update/stats", async () => {
    await delay(1000)
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  })
}

export const getProcessTransfersUpdateProcessPendingTransfersPostMockHandler =
  () => {
    return http.post("*/update/process-pending-transfers", async () => {
      await delay(1000)
      return new HttpResponse(null, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    })
  }
export const getUpdateMock = () => [
  getUpdateUpdatePostMockHandler(),
  getUpdateStatsUpdateStatsPostMockHandler(),
  getProcessTransfersUpdateProcessPendingTransfersPostMockHandler(),
]
