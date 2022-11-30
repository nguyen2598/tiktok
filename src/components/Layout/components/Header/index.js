import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <img src={images.logo} alt="tiktok" />
                {/* search */}
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                    {/* o đây có hidden lúc xử lý nhớ xóa */}
                    <button hidden={true} className={cx('clear')}>
                        {/* clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* Loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        {/* search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
