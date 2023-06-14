import http from "k6/http";
import { sleep } from "k6";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 600,
      maxDuration: "1m",
    },
  },
};

export default function () {
  http.get("https://test.k6.io/contacts.php");

  sleep(0.5);
}
