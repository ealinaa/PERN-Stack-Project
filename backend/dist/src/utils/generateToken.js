import jwt from 'jsonwebtoken';
const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECREt, {
        expiresIn: "15d"
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //miliseconds
        httpOnly: true, // prevent xss cross site scripiting
        sameSite: "strict", //csf attack cross-site request forgery
        secure: process.env.NODE_ENV !== "development" //Https 
    });
    return token;
};
export default generateToken;
