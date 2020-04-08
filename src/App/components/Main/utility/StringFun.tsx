class StringFun {
    static capitalize(str: string) {
        return (str[0].toUpperCase() + str.substr(1));
    }
}

export default StringFun;