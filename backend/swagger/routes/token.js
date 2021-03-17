/**
 * @swagger
 * /token/:
 *  post:
 *    description: Use para gerar um novo token
 *    tags: [Token]
 *    requestBody:
 *      description: Request body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      '200':
 *        description: Requisição bem sucedida
 *      '400':
 *        description: Falha na requisição
 */
