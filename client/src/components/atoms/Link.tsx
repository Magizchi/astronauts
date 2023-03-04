import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { Link as LinkRouter } from "react-router-dom";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant: "solid" | "outline";
    color?: "primary" | "secondary";
    to: string;
}

export const Link: FunctionComponent<LinkProps> = ({ variant, to, children }) => {
    return (
        <LinkRouter
            to={to}
            className={classNames(
                "block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto",
                {
                    "bg-rose-600 hover:bg-rose-700 active:bg-rose-500 text-white ": variant === 'solid',
                    "bg-white text-rose-600 hover:text-rose-700 active:text-rose-500 ": variant === "outline"
                }
            )}
        >
            {children}
        </LinkRouter>
    )
}