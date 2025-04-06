import React from 'react';
import { Button } from "../components/ui/button";
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: `url('https://public.readdy.ai/ai/img_res/84669f53bfc76e76d5820223a54fb20b.jpg')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2 animate-fade-in">
              <h2 className="text-3xl font-bold text-amber-400">...אחרי אינספור בקשות</h2>
              <h2 className="text-3xl font-bold text-amber-400">אחרי אינספור פניות</h2>
              <h1 className="text-5xl font-extrabold text-white mt-2">סוף סוף זה מגיע</h1>
            </div>
            
            <div className="space-y-2 mt-8">
              <p className="text-2xl">?תמיד חלמתם ליצור</p>
              <p className="text-2xl">?להלחין</p>
              <p className="text-2xl">?לכתוב טקסט</p>
              
              <h3 className="text-4xl font-bold mt-6 text-amber-300">..הגיע הזמן שלכם</h3>
            </div>
            
            <div className="bg-black/40 p-8 rounded-xl backdrop-blur-sm mt-8">
              <h2 className="text-3xl font-bold">קורס מקוצר עם המאסטר המלחין</h2>
              <h1 className="text-5xl font-extrabold text-amber-400 my-4">אלחנן אלחדד</h1>
              
              <div className="mt-6 text-xl">
                <p>שיקנה לכם</p>
                <p>את כל הכישורים</p>
                <p>והיכולות להיות מלחינים ויוצרים בעצמכם</p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-3xl font-bold text-amber-300 mb-2">0527670194</p>
              <p className="text-xl">השאירו את המילים "מעניין אותי"</p>
              <p className="text-xl">ונחזור אליכם בהקדם</p>
              
              <Button className="mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 text-xl !rounded-Button whitespace-nowrap cursor-pointer">
                מעניין אותי
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <i className="fas fa-chevron-down text-2xl animate-bounce"></i>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-400">על הקורס</h2>
              <div className="space-y-4 text-lg">
                <p>הקורס המקוצר של אלחנן אלחדד מציע לכם הזדמנות ייחודית לרכוש את המיומנויות והידע הדרושים להפוך למלחינים ויוצרים מוזיקליים מקצועיים.</p>
                <p>בהדרכתו של אלחנן, מלחין מנוסה ומוערך, תלמדו את יסודות ההלחנה, כתיבת טקסטים, והפקה מוזיקלית - כל זאת בסביבה תומכת ומעשירה.</p>
                <p>הקורס מיועד לכל מי שחולם ליצור מוזיקה משלו, בין אם אתם מתחילים או כבר יש לכם רקע מוזיקלי.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://public.readdy.ai/ai/img_res/66499cadcabb80d6bac3118351d73e89.jpg" 
                alt="מלחין בעבודה" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">מה תלמדו בקורס</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="text-amber-400 text-4xl mb-4">
                <i className="fas fa-music"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">יסודות ההלחנה</h3>
              <p className="text-gray-300">למדו את העקרונות הבסיסיים של תיאוריה מוזיקלית, הרמוניה, מלודיה וריתמוס - הבסיס לכל יצירה מוזיקלית מוצלחת.</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="text-amber-400 text-4xl mb-4">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">כתיבת טקסטים</h3>
              <p className="text-gray-300">פתחו את המיומנויות שלכם בכתיבת טקסטים משמעותיים ומרגשים שיתחברו למוזיקה שלכם בצורה מושלמת.</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg transform transition-transform hover:scale-105">
              <div className="text-amber-400 text-4xl mb-4">
                <i className="fas fa-sliders-h"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">הפקה מוזיקלית</h3>
              <p className="text-gray-300">למדו את יסודות ההפקה המוזיקלית, כולל עבודה עם תוכנות הקלטה, מיקס ועיבוד צליל מקצועי.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instructor Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://public.readdy.ai/ai/img_res/bd6c8a0e78c58cc84ac1d2bcb729161e.jpg" 
                alt="אלחנן אלחדד" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-400">אלחנן אלחדד</h2>
              <div className="space-y-4 text-lg">
                <p>אלחנן אלחדד הוא מלחין מוערך עם שנים של ניסיון בתעשיית המוזיקה. היצירות שלו זכו להכרה רחבה והוא עבד עם אמנים מובילים בתעשייה.</p>
                <p>הגישה הייחודית שלו להוראה מאפשרת לתלמידים לפתח את הסגנון האישי שלהם תוך רכישת המיומנויות הטכניות הנדרשות להצלחה.</p>
                <p>אלחנן מאמין שלכל אחד יש את היכולת ליצור מוזיקה משמעותית, והוא מחויב לעזור לתלמידיו להגשים את החלומות המוזיקליים שלהם.</p>
              </div>
              
              <div className="mt-8 flex space-x-4 space-x-reverse">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold !rounded-Button whitespace-nowrap cursor-pointer">
                  קרא עוד
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">מה אומרים התלמידים</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="text-amber-400 text-2xl mb-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-gray-300 mb-6">הקורס של אלחנן שינה את חיי המוזיקליים. תוך זמן קצר רכשתי כלים שעזרו לי להלחין את השיר הראשון שלי, שתמיד חלמתי עליו.</p>
              <div className="flex items-center">
                <div className="text-amber-400 text-xl">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="mr-4">
                  <h4 className="font-bold">דניאל לוי</h4>
                  <p className="text-sm text-gray-400">תלמיד לשעבר</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="text-amber-400 text-2xl mb-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-gray-300 mb-6">אלחנן הוא מורה מדהים. הוא מצליח להסביר מושגים מורכבים בצורה פשוטה ומובנת, והתמיכה שלו לאורך כל הדרך היא יוצאת דופן.</p>
              <div className="flex items-center">
                <div className="text-amber-400 text-xl">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="mr-4">
                  <h4 className="font-bold">מיכל כהן</h4>
                  <p className="text-sm text-gray-400">זמרת-יוצרת</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="text-amber-400 text-2xl mb-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-gray-300 mb-6">ההשקעה בקורס הזה הייתה אחת ההחלטות הטובות ביותר שעשיתי. היום אני מלחין ומפיק מוזיקה ברמה שלא חלמתי שאגיע אליה.</p>
              <div className="flex items-center">
                <div className="text-amber-400 text-xl">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="mr-4">
                  <h4 className="font-bold">יוסי אברהם</h4>
                  <p className="text-sm text-gray-400">מפיק מוזיקלי</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-amber-400">הגיע הזמן להגשים את החלום</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">הצטרפו לקורס המקוצר של אלחנן אלחדד והתחילו את המסע שלכם להפוך למלחינים ויוצרים מוזיקליים מקצועיים.</p>
          
          <form name='contact' method="post" className="max-w-md mx-auto bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">השאירו פרטים ונחזור אליכם</h3>
            <input type="hidden" name="form-name" value="contact" />
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="שם מלא" 
                  className="w-full p-3 bg-gray-800 rounded-lg border-none focus:ring-2 focus:ring-amber-400 text-white" 
                />
              </div>
              
              <div className="relative">
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="טלפון" 
                  className="w-full p-3 bg-gray-800 rounded-lg border-none focus:ring-2 focus:ring-amber-400 text-white" 
                />
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="אימייל" 
                  className="w-full p-3 bg-gray-800 rounded-lg border-none focus:ring-2 focus:ring-amber-400 text-white" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg whitespace-nowrap cursor-pointer"
              >
                מעניין אותי
              </button>
              
              <p className="text-sm text-gray-400 mt-4">או התקשרו ישירות: 0527670194</p>
            </div>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-amber-400">אלחנן אלחדד</h3>
              <p className="text-gray-400">מלחין ומורה למוזיקה</p>
            </div>
            
            <div className="flex space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-xl cursor-pointer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-xl cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-xl cursor-pointer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-xl cursor-pointer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} כל הזכויות שמורות לאלחנן אלחדד</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

