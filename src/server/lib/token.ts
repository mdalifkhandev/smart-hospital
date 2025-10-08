import jwt, { JwtPayload } from 'jsonwebtoken'

export const createToken = (
    data: JwtPayload,
    secret: string,
    expire?: jwt.SignOptions['expiresIn']
) => {
    const options = expire ? { expiresIn: expire } : undefined;
    return jwt.sign({ data }, secret, options);
}
