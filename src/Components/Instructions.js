import './Styles.css';

const Instructions = () => {
    return (
        <div className="instructions">
            <h3>تعليمات للمرضى</h3>
            <div className="instruct">
                <div>ضرورة الحضور بالكمامة</div>
                <div>اعطاء بيانات المريض كاملة والحفاظ على نظافة المكان</div>
                <br />
                <div>الدخول للطبيب باسبقية الحضور</div>
                <div>عدم احضار الاطفال</div>
            </div>
        </div>
    );
}

export default Instructions;