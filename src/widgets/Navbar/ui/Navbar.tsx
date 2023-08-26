import { styleMaker } from 'shared/lib/styleMaker/styleMaker';
import styles from './Navbar.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useCallback, useState } from 'react';

const navList = ['Главная', 'О нас', 'Каталог питомцев', 'Помочь проекту', 'Контакты'];

interface NavbarProps {
   className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const { className = '' } = props; 

    const [actibeBtn, setActiveBtn] = useState('Главная');

    const onCLickMenuItem = useCallback((value: string) => {
      setActiveBtn(value);
    }, [])
    
    return (
        <header className={styleMaker(styles.navbar, [className], {})}>
            <div className='container'>
                <div className={styles.content}>
                    <p>Логотип</p>
                    <nav className='container'>
                        <ul className={styles.list}>
                            {navList.map((item) => (
                                <li key={item} className={styles.listItem}>
                                    <AppButton onClick={onCLickMenuItem} value={item} variant={item === actibeBtn ? 'outlineBlack' : 'clear'}>{item}</AppButton>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <AppButton variant='outlineColor'>Войти</AppButton>
                </div>
            </div>
        </header>
    );
};