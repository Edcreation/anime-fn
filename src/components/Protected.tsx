type ELEMENT_COMPONENT = {
    isLoggedIn: boolean
    children: JSX.Element
    fallback: JSX.Element
}

export const ProtectedComponent = ({ isLoggedIn, children, fallback } : ELEMENT_COMPONENT) => {
    if (isLoggedIn) {
        return fallback;
    }
    return children;
};

