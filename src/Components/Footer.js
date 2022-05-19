import './Styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h4>لينكات سريعة</h4>
                <ul>
                    <li>شروط الاستخدام</li>
                    <li>سياسة الخصوصية</li>
                    <li>من نحن</li>
                    <li>اتصل بنا</li>
                </ul>
            </div>
            <div>
                <h4>احجز عن طريق</h4>
                <ul>
                    <li>التخصص</li>
                    <li>المنطقة</li>
                    <li>المستشفى</li>
                    <li>المراكز الطبية والعيادات</li>
                </ul>
            </div>
            <div>
                <h4>الكادر الطبي</h4>
                <ul>
                    <li>انضم كطبيب</li>
                    <li>انضم كممرض</li>
                    <li>انضم كمركز طبي</li>
                    <li>انضم كصيدلي</li>
                </ul>
            </div>
            <div>
                <h4 className='ava'>متوفر على</h4>
                <div className='foot-imgs'>
                    <img className='foot-img1' alt="" />
                    <img className='foot-img2' alt="" />
                </div>
            </div>

        </div>
    );
}

export default Footer;