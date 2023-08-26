import { ButtonHTMLAttributes, memo } from 'react';
import { Mods, styleMaker } from 'shared/lib/styleMaker/styleMaker';
import styles from './AppButton.module.scss';

export type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

interface AppButtonProps extends HTMLButtonProps {
   children: string;
   variant?: 'clear' | 'outlineBlack' | 'outlineColor' | 'bgPrimary' | 'bgSecondary';
   hover?: boolean;
   className?: string;
   inlineStyles?: React.CSSProperties;
   value?: string;
   onClick?: (value: string) => void;
}

export const AppButton: React.FC<AppButtonProps> = memo((props: AppButtonProps) => {
    const {
        className = '',
        hover = false,
        children,
        inlineStyles,
        onClick,
        variant = 'clear',
        ...otherProps
    } = props;

    const additional = [
        className,
        styles[variant],
    ];

    const mods: Mods = {
        [styles.hover]: hover,
    };

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e.currentTarget.value);
    };

    return (
        <button
            data-testid='appButton'
            type='button'
            className={styleMaker(styles.button, additional, mods)}
            style={{ ...inlineStyles }}
            onClick={onClickHandler}
            {...otherProps}
        >
            {children}
        </button>
    );
});
