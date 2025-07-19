import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" className="text-primary" size={24} />
              <span className="text-xl font-bold text-gray-900">МатемТютор</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Обо мне</a>
              <a href="#subjects" className="text-gray-700 hover:text-primary transition-colors">Предметы</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Войти в кабинет</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Репетитор по{' '}
              <span className="text-primary">математике</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Помогаю ученикам 5-9 классов освоить алгебру и геометрию. 
              Индивидуальный подход, современные методики, гарантированный результат!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Записаться на урок
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Посмотреть материалы
                <Icon name="BookOpen" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
          
          {/* Math Icons Animation */}
          <div className="flex justify-center items-center space-x-8 text-6xl opacity-20 mt-12">
            <div className="animate-bounce delay-100">📐</div>
            <div className="animate-bounce delay-200">📊</div>
            <div className="animate-bounce delay-300">🔢</div>
            <div className="animate-bounce delay-400">📏</div>
            <div className="animate-bounce delay-500">🧮</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Обо мне</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>Меня зовут Зухра Ильясовна, и я преподаю математику уже более 2 лет. Мой опыт включает работу в школе и индивидуальные занятия с учениками разного уровня.</p>
                <p>
                  Верю, что математика может быть интересной и понятной для каждого ученика. 
                  Использую современные методики обучения и всегда нахожу индивидуальный подход.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-primary text-white">8+ лет опыта</Badge>
                  <Badge className="bg-secondary text-gray-900">150+ учеников</Badge>
                  <Badge className="bg-primary text-white">Высшее образование</Badge>
                  <Badge className="bg-secondary text-gray-900">Современные методики</Badge>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="img/61a7abfb-b253-4b55-a829-bd24299c5c3c.jpg" 
                alt="Репетитор математики Анна Сергеевна"
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Предметы и классы</h2>
            <p className="text-xl text-gray-600">Специализируюсь на математике для учеников 5-9 классов</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-colors group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Calculator" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Алгебра</CardTitle>
                    <CardDescription>5-9 классы</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Уравнения и неравенства</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Функции и графики</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Системы уравнений</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Степени и корни</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Арифметическая прогрессия</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Triangle" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Геометрия</CardTitle>
                    <CardDescription>7-9 классы</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Планиметрия</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Треугольники и четырехугольники</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Окружности и углы</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Площади фигур</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Теорема Пифагора</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены на занятия</h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат обучения</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Разовое занятие</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">1200₽</div>
                <CardDescription>за урок 60 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Индивидуальный подход</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Материалы в подарок</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Домашние задания</li>
                </ul>
                <Button className="w-full mt-6">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-6 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Пакет 8 занятий</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">8000₽</div>
                <CardDescription>1000₽ за урок</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Все из предыдущего</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Скидка 200₽ за урок</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Промежуточные тесты</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> WhatsApp поддержка</li>
                </ul>
                <Button className="w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Месячный курс</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">15000₽</div>
                <CardDescription>16 занятий, 937₽ за урок</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Максимальная скидка</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Индивидуальная программа</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Отчеты родителям</li>
                  <li className="flex items-center"><Icon name="Check" className="text-green-500 mr-2" size={16} /> Гарантия результата</li>
                </ul>
                <Button className="w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы учеников</h2>
            <p className="text-xl text-gray-600">Что говорят мои ученики и их родители</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Иванова</CardTitle>
                    <CardDescription>Мама ученика 8 класса</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Анна Сергеевна помогла моему сыну подтянуть алгебру за полгода. 
                  Оценки улучшились с 3 до 5! Очень терпеливый и понятливый преподаватель."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий, 9 класс</CardTitle>
                    <CardDescription>Ученик</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Математика стала моим любимым предметом! Анна Сергеевна объясняет сложные темы 
                  так просто, что все становится понятно. Готовлюсь к ОГЭ с уверенностью!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Петрова</CardTitle>
                    <CardDescription>Мама ученицы 7 класса</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Дочка боялась геометрии, а теперь решает задачи с удовольствием. 
                  Анна Сергеевна нашла подход к ребенку и вернула интерес к математике."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Свяжитесь со мной</h2>
              <p className="text-xl text-gray-600 mb-8">
                Готова ответить на любые вопросы и подобрать индивидуальную программу обучения
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">math.tutor@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Записаться на пробный урок</CardTitle>
                <CardDescription>Заполните форму, и я свяжусь с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input placeholder="Телефон" />
                </div>
                <div>
                  <Input placeholder="Класс ученика" />
                </div>
                <div>
                  <Textarea placeholder="Расскажите о ваших целях и пожеланиях" />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Calculator" className="text-primary" size={24} />
                <span className="text-xl font-bold">МатемТютор</span>
              </div>
              <p className="text-gray-400">
                Репетитор по математике для учеников 5-9 классов. 
                Помогаю полюбить математику и достичь отличных результатов.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Предметы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Алгебра 5-9 класс</li>
                <li>Геометрия 7-9 класс</li>
                <li>Подготовка к ОГЭ</li>
                <li>Подготовка к ВПР</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Индивидуальные занятия</li>
                <li>Онлайн уроки</li>
                <li>Подготовка к экзаменам</li>
                <li>Методические материалы</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>math.tutor@example.com</li>
                <li>WhatsApp: +7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МатемТютор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index