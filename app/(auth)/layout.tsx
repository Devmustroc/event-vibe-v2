import React, {FC} from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div
            className="flex-center min-h-screen w-full bg-amber-700 bg-dotted-pattern bg-cover bg-center"
        >
            { children }
        </div>
    )
};

export default Layout;