import axios from "axios";

export default class RequestService {
  static interactionId = "21bac548-d2de-1238-b106-880a5018460d";
  static token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjM4MTI5MjkwMjIsImlhdCI6MTY2NTQ0NTM3NSwidXNlcm5hbWUiOiJhZG1pbiIsInBlcm1pc3Npb25zIjpbImRvU29tZXRoaW5nIl19.g3wn3Sm7CjK4bqjO3i64ysDOzhAXzW-vtcCfxSXeqSAgp_eITLFDb54agLcHatJWll53w8XhjuEBdNKP4GJ9Qg";
  static config = {
    "x-fapi-interaction-id": this.interactionId,
    Authorization: `Bearer ${this.token}`,
  };

  static async loadAccountsAsync() {
    try {
      const result = await axios.get("/accounts", {
        headers: {
          ...this.config,
        },
      });

      if (result.data) {
        return result.data.Data.Account;
      }
      console.log('Unknown error')
    } catch (e) {
      console.log(e);
    }
  }
}