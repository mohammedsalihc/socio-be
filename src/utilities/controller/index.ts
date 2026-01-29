import { Response } from "express";

export const jsonResponse = (response: Response, result?: any | null) => {
    if (result) {
        response.type('application/json');
        return response.status(200).json(result);
    } else {
        return response.status(200).json({ "status": "success" });
    }
}