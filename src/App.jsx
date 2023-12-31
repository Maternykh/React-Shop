import React, { Component } from 'react'
import Presentation from './components/main/Presentation'
import Items from './components/items/Items'
import Log from './components/Header/Log'
import ShowFullItem from './components/items/ShowFullItem'
import Blog from './components/Blog/Blog'
export class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      items: [
        {
          id:1,
          title:"Крем для лица",
          price:143,
          category:"Krem",
          desc:"Увлажнение и питание: Крем обогащен мощными увлажняющими и питательными компонентами, которые нежно увлажняют кожу и усиливают ее естественную барьерную функцию. Это помогает уменьшить сухость и шелушение, делая кожу мягкой и гладкой. Защита от окружающей среды: Изысканный Луч содержит антиоксиданты, которые помогают защитить кожу от вредных воздействий окружающей среды, таких как загрязнения и УФ-лучи. Это снижает риск преждевременного старения и повреждений кожи. Улучшение текстуры: Регулярное применение крема способствует улучшению текстуры кожи, делая ее более упругой и эластичной. Кожа выглядит более равномерной и сияющей. Борьба с признаками старения: Изысканный Луч содержит активные ингредиенты, которые помогают сократить видимость морщин и уменьшить пигментные пятна. Это делает кожу более молодой и сияющей. Гипоаллергенный и безопасный: Крем разработан с учетом чувствительной кожи и не содержит агрессивных химических компонентов. Он подходит для всех типов кожи и не вызывает раздражения. Приятная текстура и аромат: Крем имеет легкую текстуру, которая легко впитывается и не оставляет ощущения липкости. Его нежный аромат придает приятное ощущение свежести и расслабления.",
          image:"./1.jpg"
        },
        {
          id:2,
          title:"Маска для лица",
          price:180,
          category:"Mask",
          desc:"Мгновенное омоложение: Маска моментально улучшает внешний вид кожи, делая ее более сияющей, упругой и гладкой. Эффект виден сразу после применения. Глубокое очищение: Специальные ингредиенты маски помогают очистить поры от загрязнений и избавиться от излишков масла, предотвращая появление угрей и комедонов. Увлажнение и питание: Маска обогащена увлажняющими и питательными компонентами, которые смягчают и увлажняют кожу, делая ее более здоровой и ухоженной. Улучшение текстуры: Регулярное использование маски способствует улучшению текстуры кожи, уменьшая видимость морщин и делая кожу более ровной и эластичной. Снижение воспалений: Маска содержит успокаивающие ингредиенты, которые помогают снизить воспаление и покраснение кожи, делая ее более здоровой и равномерной. Подходит для всех типов кожи: Маска разработана так, чтобы соответствовать всем типам кожи, включая чувствительную кожу. Она гипоаллергенна и безопасна для ежедневного использования.",
          image:"./2.jpeg"
        },
        {
          id:3,
          title:"Набор кремов",
          price:350,
          category:"Mask",
          desc:"Набор Кремов для Комплексного Ухода за Кожей представляет собой исключительный набор из трех выдающихся кремов, созданных для того, чтобы обеспечить вашей коже максимальный уход и красоту. Этот набор позволит вам наслаждаться всеми преимуществами ухода за кожей в одном удобном комплекте. Компоненты набора: Увлажняющий крем: Этот крем обогащен увлажняющими компонентами, которые глубоко увлажняют кожу и восстанавливают ее водный баланс. Кожа становится мягкой, упругой и сияющей. Антивозрастной крем: Специально разработанный для борьбы с признаками старения, этот крем содержит активные ингредиенты, которые помогают сгладить морщины и улучшить упругость кожи. Защитный крем с SPF: Этот крем обеспечивает надежную защиту от ультрафиолетовых лучей и окружающей среды. Он предотвращает преждевременное старение и повреждения кожи, обеспечивая ей долгосрочную защиту. Основные особенности: Комплексный уход: Набор включает в себя крема, предназначенные для увлажнения, омоложения и защиты кожи. Это обеспечивает комплексный уход, удовлетворяющий все потребности вашей кожи. Подходит для всех типов кожи: Крема разработаны так, чтобы подходить для всех типов кожи, включая чувствительную. Они гипоаллергенны и безопасны для повседневного использования. Продукты высокого качества: Каждый крем изготовлен с использованием высококачественных ингредиентов, чтобы обеспечить наилучшие результаты для вашей кожи. Способ применения: Нанесите соответствующий крем на чистую кожу лица и шеи утром и/или вечером, следуя инструкциям на упаковке каждого продукта. Позвольте вашей коже наслаждаться всеми преимуществами комплексного ухода с Набором Кремов для Комплексного Ухода за Кожей. Обретите здоровую, молодую и сияющую кожу благодаря этому удивительному комплекту.",
          image:"./3.jpg"
        },
        {
          id:4,
          title:"Антисептик",
          price:180,
          category:"Mask",
          desc:"Антисептик Санитар-Гарант - ваш надежный спутник в поддержании чистоты и защите от бактерий и вирусов. Этот продукт предназначен для тщательной дезинфекции рук и поверхностей, обеспечивая вам и вашей семье безопасность и уверенность. Основные особенности: Эффективное уничтожение бактерий и вирусов: Санитар-Гарант обеспечивает мощную антисептическую защиту, уничтожая бактерии, вирусы и микробы на коже и поверхностях. Безопасность и гипоаллергенность: Формула антисептика разработана так, чтобы быть мягкой к коже, и он подходит для всех типов кожи. Он гипоаллергенен и не вызывает раздражения. Удобство использования: Благодаря специальному дозатору, антисептик легко наносится на руки и поверхности. Он быстро высыхает, не оставляя липкости. Портативность: Удобный флакон антисептика легко помещается в сумку или карман, что позволяет вам иметь его всегда под рукой, где бы вы ни находились. Многофункциональность: Санитар-Гарант подходит для дезинфекции рук, поверхностей, клавиатур, ручек и других предметов, с которыми вы взаимодействуете ежедневно. Способ применения: Для дезинфекции рук: Нанесите небольшое количество антисептика на ладони и тщательно разотрите в течение 20 секунд, пока не высохнет. Для дезинфекции поверхностей: Нанесите антисептик на требуемую поверхность и рассредоточьте его с помощью чистой ткани или бумажного полотенца. С Санитар-Гарант вы можете быть уверены в надежной защите от бактерий и вирусов в повседневной жизни. Позвольте этому антисептику помочь вам поддерживать чистоту и безопасность в любых ситуациях.",
          image:"./4.jpg"
        },
        {
          id:5,
          title:"Набор дезодорантов",
          price:1000,
          category:"Mask",
          desc:"Этот набор дезодорантов - идеальное решение для поддержания свежести и комфорта в течение дня. В него входят несколько различных форматов дезодорантов, включая спрей, стик и крем, обеспечивая разнообразие в выборе в зависимости от ваших предпочтений. Каждый дезодорант в этом наборе обладает мягкой, но эффективной формулой, которая контролирует потоотделение и предотвращает неприятные запахи, сохраняя при этом вашу кожу здоровой и увлажненной. Этот набор - надежный спутник на каждый день, обеспечивая надежную защиту и свежесть, которая длится долго.",
          image:"./5.jpg"
        },
        {
          id:6,
          title:"Органические духи",
          price:800,
          category:"Mask",
          desc:"Эти органические духи - искусство природы, заключенное в бутылке. Их натуральные ингредиенты, выращенные без использования пестицидов или химических удобрений, создают уникальный аромат, который объединяет силу природы и нежность искусства парфюмерии. С этими духами вы окунетесь в мир натуральных ароматов, которые развиваются на коже, создавая неповторимую ауру утонченности. Они не только подчеркивают вашу индивидуальность, но и дарят ощущение гармонии с природой, так как их производство следует принципам экологической устойчивости и заботы о окружающей среде. Эти духи - путь к естественной красоте и неповторимому стилю.",
          image:"./6.jpg"
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div>
        <Log orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Presentation/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem}/>} 
        <Items onShowItem={this.onShowItem} items = {this.state.items} onAdd={this.addToOrder}/>
        <Blog/>
      </div>
    )
  }
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App