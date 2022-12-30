// src/mocks/handlers.js
import { rest } from "msw";

import { ENDPOINT } from "../API/ENDPOINT";
import { TokenUtil } from "../Utils/auth";
import { Permission_E } from "../Model";

export const handlers = [
  rest.post(ENDPOINT.SIGN_IN, (req, res, ctx) => {
    console.log(req.headers);

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.post(ENDPOINT.SIGN_UP, (req, res, ctx) => {
    const accessToken = TokenUtil.getAccessToken();
    console.log(accessToken);

    // if (!accessToken) {
    //   // If not authenticated, respond with a 403 error
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       message: "Not authorized",
    //     })
    //   );
    // }
    return res(
      ctx.status(200),
      ctx.json({
        name: "Default User",
        email: "Default@Default.com",
        permission: Permission_E.User,
      })
    );
  }),
];
