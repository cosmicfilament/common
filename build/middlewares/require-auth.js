"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_authorized_error_1 = require("../errors/not-authorized-error");
/**
 * Checks if currentUser is set on the request object
 *
 * @throws NotAuthorized Error which extends the base Error object
 */
exports.requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    // if there is a currentUser then all is cool so next
    next();
};
