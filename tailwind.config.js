module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        button: "56px",
        buttonQuantity: "17.5px",
      },
      fontSize: {
        button: "18px",
        product: "20px",
        addCart: "30px",
        yourCart: "111px",
        yourCartMobile: "104px",
        total: "35px",
        productDescription: "21px",
        productDescriptionMobile: "11px",
        closeMobile: "14px",
        close: "24px",
        checkoutMobile: "48px",
      },
      lineHeight: {
        product: "32px",
        addCart: "31px",
        yourCart: "80%",
        yourCartMobile: "102%",
        total: "42px",
        productDescription: "108%",
      },
      height: {
        button: "48px",
        product: "578px",
        image: "468px",
        addCart: "128px",
        productCart: "264px",
        productCartMobile: "122px",
        divImageCart: "231px",
        imageCart: "218px",
        imageCartMobile: "98px",
        imageAddCart: "125px",
        buttonQuantity: "35px",
        buttonQuantityMobile: "15px",
        size: "35px",
        sizeMobile: "19px",
        textHeader: "57px",
        yourCartMobile: "214px",
        backBlack: "170vh",
        backBlackMd: "125vh",
      },
      maxHeight: {
        product: "578px",
        image: "468px",
        addCart: "128px",
        cart: "821px",
        backBlack: "90vh",
        backBlackMd: "110vh",
      },
      minHeight: {
        cart: "300px",
      },
      width: {
        button: "152px",
        product: "440px",
        image: "435px",
        cart: "824px",
        yourCart: "760px",
        divImageCart: "234px",
        imageCart: "226px",
        imageAddCart: "125px",
        imageCartMobile: "99px",
        buttonQuantity: "85px",
        buttonQuantityMobile: "30px",
        size: "35px",
        sizeMobile: "19px",
        widthSizesMobile: "86px",
        sizeText: "720px",
      },
      textColor: {
        productDescriptionColor: "#999999",
      },
      letterSpacing: {
        total: "1px",
        addCart: "-1px",
      },
      maxWidth: {
        product: "440px",
        image: "435px",
        addCart: "229px",
        cart: "824px",
      },
      minWidth: {
        cart: "50%",
      },
      dropShadow: {
        image: "10px 40px 21px rgba(0, 0, 0, 0.7)",
      },
      backgroundColor: {
        product: "linear-gradient(180deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
      },
      backgroundImage: {
        productGradient: "linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, #1D1D1D 100%)",
      },
      boxShadow: {
        addCart: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
      },
      keyframes: {
        spinner: {
          "0% 100%": {transform: "rotateY(0deg)"},
          "50%": {transform: "rotateY(180deg)"},
        },
        text: {
          "0%": {transform: "translateX(0px)"},
          "100%": {transform: "translateX(-715px)"},
        },
        cart: {
          "0%": {transform: "scale(0)"},
          "100%": {transform: "Scale(1)"},
        },
        textMobile: {
          "0%": {transform: "translateX(0px)"},
          "100%": {transform: "translateX(-410px)"},
        },
      },
      animation: {
        spinner: "spinner 2s ease-in-out infinite",
        text: "text 5s ease-in-out infinite",
        textMobile: "textMobile 5s ease-in-out infinite",
        cart: "cart 0.5s ease-in",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
