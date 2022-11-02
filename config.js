const Config={
    firebase: {   
        type: "service_account",
        project_id: "ecommerce-coder-740ec",
        private_key_id: "24b74b25b98c6e1c5cb6e0191ca60d294dcc489b",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4qeXz6ReJ/0bt\n+i0Dp3IYWXKMHhyR+Uzw3vefiGaUn5Db9YZztUol0NhzTwaG6KWPTLDeBXz2ol7s\nLkEkHtfuGBIJoxnAImR5dyMMJzvwfHDX5dvuSciXyYz8z080eateWI9pAEiqLCcK\nzlcaIDAYsJVyF7GsRzq9ie2PYhIWNCpGuPHNSX02ehQKYgjlAnhdw/TWDDUpQHpb\nh0TYDZabH679RjfXG7K40Js8vWZbxOXbifSr9WbdG+zN7xvuc8ZTl01bh6nUTbQP\nX2T+O2ZVA4KF3GEDbBnMAUMZuI5bdJ/R6tK1PM4SlYf70Hpku5+X2u7NKXanbBWN\ne4/YyzqdAgMBAAECggEADr+hCk1GUEL3dQfLYxSTT/8K30aDZSQ6YS2JrO/ts3aY\nEP1H1wN2b9VBiFoaLRm1KWAIaz8YdzFKMAZUtRASkmVRQXxJkPceO7ZIcg7LIn6p\n25Bz85DoiLjz/fgHvSrvhSpBD/OSGidLGfmXatKBzOMDmJhsXBRXTG6Q7uf4BlZS\noiq30AcpczTNWiQlpC7WhEGVTL1aCNXbdjLA8GQDk3/gvl03FGiOXo0MuX8aAr8E\nLSeG1h3+r5e0mYiAutmN/pfHJj1cE82MS6PE6O2XrdLphMLWiKWKml1oRIrjzOEQ\n3tL1r1GXX2/jng/o+LjqMPKopyoONB4x1n++iDS7eQKBgQD8KBhMg+djWWsR9mP6\nz1Qwoijw+DO7pmLpEvMHwiqHSGpMO4+M6dmEEthI2zXRzXlhZjfY7gQMuq3xmM23\nuzTkVWVOlcFcyaFNnO/54YV8dg6NTalXPA5qf0zdTGXdpJP6agzMwLsKYFoWaBMC\nb5IPbEpU4wZt0cKkmzNV+6dQBQKBgQC7enLRu4mFwAshFsScOLNLufyVyCvywj6A\nirSJOqsljSgWzU6Rg0EwwiU02aIc5WZiX3LaZ7zCr0Rvq/kwGGGBZ0Y+Zt3x6r4A\nom+WUDL0mSXGwpTEhl/7xdnRibk8I8RT+m4oFGgBMosc97IewQslbw3KSBrGgYtE\nSIpsHrB7uQKBgQDevviAFwE/JQ1NR8+YDrA7afQqscbZXCkB5WhkkSQKb3DfOLod\na7JnVlJTQbnwRMeVv7tT2SYgrIPd6PLI/AnELp+YZPfz5HWmXx0qKwtFH/DI6DLQ\nSdAeSaf30XYm7ix+SFJYSWSwzN6n7nXkb/ShxTKAfDAAsQx1ZlhZ+z0YlQKBgAN6\ngibiE+snZQ14Hq3HX4xIJyegTzBx6jb4W+Ev9Xz84YGKzaplhRAiig4w+5ENsJii\nrL7grd/u4JYx2q3JxgVgpS0DO5sBgAUC/o8Lbeab8Nd/RMNguucxBJmetJEpGLt2\nKhUUS9m51lrzPZrUeiB3rwnRzK1iOfNKZUccSqoBAoGAJZvmnGlT7ODP8Faox5Ul\nmjjMtzmoXePhq3sXcDIoLUeGzO9PddROq1rMRKFvJvDtOcRj2gEgdUj5y580/Oiv\nSeFfN9znc1c3hncPJeCuQ87tvnMgAfpV1Jxs4y+qkf1LAqrupRWNd9AEIzHst8bC\n/ziAi3wZyEJlaEejm4cA3Pg=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-xfp2t@ecommerce-coder-740ec.iam.gserviceaccount.com",
        client_id: "100730538691687247901",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xfp2t%40ecommerce-coder-740ec.iam.gserviceaccount.com"
    },
    mongoDB: {
        uri: `mongodb://localhost:27017/ecommerce`,
        options: {
          serverSelectionTimeoutMS: 25000,
        }
    },

}
  
export default Config