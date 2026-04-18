/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Flower2, 
  GraduationCap, 
  PartyPopper, 
  Truck, 
  MessageSquare,
  Menu,
  ChevronRight,
  Quote
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-parchment/80 backdrop-blur-md border-b border-brand-stone">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-[21px] font-['Times_New_Roman',_serif] font-bold tracking-tight uppercase text-brand-green">Maison Bloom</div>
          
          <div className="hidden md:flex gap-10 items-center">
            {['The Atelier', 'Services', 'Collections', 'Reserve'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs uppercase tracking-[0.2em] text-brand-green/70 hover:text-brand-green transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="text-brand-green hover:opacity-70 transition-opacity">
              <ShoppingBag size={20} />
            </button>
            <button className="md:hidden text-brand-green">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            src="https://postfiles.pstatic.net/MjAyNjA0MThfMTYz/MDAxNzc2NDc4NzE2ODM5.wyl4hcikfCdIPiaKv5b_BQG_4sDyVcXgvQP9HNWa8XMg.BboBCPmVrk9OAvteiEBYkMfaZhyi5zRrGC-Lo9q_QXQg.JPEG/celebrating-womens-health-with-vibrant-bouquet-flowers-ribbons-soft-pink-bac.jpg?type=w966" 
            alt="Floral background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            animate={{ scale: [1, 1.1] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
          />
          <div className="absolute inset-0 bg-brand-parchment/20" />
        </div>

        <motion.div 
          {...fadeIn}
          className="relative z-10 w-full max-w-[490px] mx-6"
        >
          <div className="bg-brand-parchment/40 backdrop-blur-xl aspect-square flex flex-col items-center justify-center p-[28px] text-center border border-white/30 rounded-sm">
            <h1 className="text-[90px] font-['Times_New_Roman',_serif] text-brand-green mb-[20px] leading-[0.94] tracking-[2px]">
              Maison<br />Bloom
            </h1>
            <p className="text-[17px] font-sans text-[#545454] mb-[48px] tracking-[2px]">
              가장 아름다운 순간을 위한 꽃
            </p>
            <button className="bg-brand-green text-brand-parchment px-[46px] py-[16px] text-[16px] tracking-widest font-medium hover:bg-opacity-90 transition-all rounded-sm shadow-xl">
              꽃다발 예약하기
            </button>
          </div>
        </motion.div>
      </section>

      {/* The Atelier Section */}
      <section id="the-atelier" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="max-w-md">
              <h2 className="text-4xl md:text-[50px] font-kopub font-bold text-brand-green mb-8 leading-tight tracking-[-1px]">
                꽃 한 송이에도<br />감정을 담습니다
              </h2>
              <div className="w-12 h-px bg-brand-green/30 mb-8" />
              <p className="text-[18px] font-kopub text-brand-green/80 leading-[1.8] tracking-[1px] mb-6">
                메종블룸은 단순히 꽃을 판매하는 공간이 아닙니다. 누군가의 축하, 위로, 사랑, 감사의 마음을 꽃으로 전하는 플라워 브랜드입니다.
              </p>
              <p className="text-[18px] font-kopub text-brand-green/80 leading-[1.8] tracking-[1px]">
                유럽풍 빈티지 감성과 섬세한 플라워 스타일링을 바탕으로, 계절마다 가장 아름다운 꽃을 엄선하여 당신만의 특별한 꽃다발을 완성합니다.
                <br /><br />
                당신의 소중한 순간이 오래 기억될 수 있도록, 메종블룸은 꽃 이상의 감동을 전합니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm group">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MThfMjUg/MDAxNzc2NTAzMDI4ODA0.2tD2ZG4iiECWYb-C4nUyxZLMfrLxhdnGEYjzYkoTBfEg.WJLb-QAvaaKhw6tNun6wY14dYsoSafqxhD--65toJNIg.JPEG/SE-2c7f110c-1092-4297-ba38-9f9fbf3b6050.jpg?type=w966" 
                alt="Our Atelier" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Small accent image */}
            <div className="absolute -bottom-10 -left-10 w-1/2 aspect-square hidden lg:block border-[12px] border-brand-parchment shadow-2xl overflow-hidden rounded-sm">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA0MThfMjE0/MDAxNzc2NTAzNjAzNzc5.1O2QrCwIPVDkX5xJRb8j7odsuH4y6lYON1AIUGNqjJgg.LMliMIaKHSYRsKlHWf1MtXPEx0IjCV-FTCakagcS9u4g.JPEG/SE-d671266f-d699-4d36-8424-9c11f2b4ea85.jpg?type=w966" 
                alt="Tools" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#F9F7F2] py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-green/60 mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-green">서비스</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-px bg-brand-green/10"
          >
            {[
              { title: '꽃다발 주문', icon: Flower2, desc: '생일, 기념일, 축하 선물에 어울리는 감성 꽃다발을 제작합니다.' },
              { title: '플라워 클래스', icon: GraduationCap, desc: '기초부터 심화 과정까지, 메종블룸만의 스타일을 배울 수 있는 프라이빗 클래스입니다.' },
              { title: '웨딩 플라워', icon: PartyPopper, desc: '일생의 가장 빛나는 순간을 위한 본식 부케와 공간 연출을 전문으로 합니다.' },
              { title: '정기 구독', icon: Truck, desc: '일상에 생기를 더해줄 시즌 플라워를 매주 정기적으로 배송해 드립니다.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-[#F9F7F2] p-12 md:p-16 hover:bg-brand-parchment transition-colors duration-500 group"
              >
                <service.icon className="text-brand-green mb-8 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1} />
                <h3 className="text-[26px] font-kopub font-bold text-brand-green mb-4">{service.title}</h3>
                <p className="text-brand-green/70 leading-relaxed mb-8">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green border-b border-brand-green/20 pb-1 hover:border-brand-green transition-all">
                  Discover <ChevronRight size={12} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collections/Gallery Section */}
      <section id="collections" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-green/60 mb-4 block">Curated Selections</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green">The Bloom Gallery</h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-[0.2em] font-bold border-b border-brand-green/20 pb-1 hover:border-brand-green transition-all">
            View All Collections
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { tag: 'Seasonal', title: 'Rose Garden', img: 'https://postfiles.pstatic.net/MjAyNjA0MThfMjAz/MDAxNzc2NDkwMDg2MDcx.9r-Iw9QNhu0p-KaAxLsXB_wZS5NEg8zD0L2ItjuIXNwg.JouV_c8XHBRfSJ9uLTdYG5C9eEQInVLBy1q_RPVxlngg.JPEG/bouquet-pink-roses-waffle-cone-soft-pink-background.jpg?type=w966', aspect: 'aspect-[3/4]' },
            { tag: 'Signature', title: 'Pink Rose & Hydrangea', img: 'https://postfiles.pstatic.net/MjAyNjA0MThfODgg/MDAxNzc2NDc4MDM3MTYy.FqWLLM4cAtckj9-hXJJnAU7HTnPoC0kYWIqBGAJG6N4g.-fTiTiTmVx25HMe6qfJNXtrHhlfoJXkf3iFTayEKJIMg.JPEG/pink-rose-hydrangea-bouquet.jpg?type=w966', aspect: 'aspect-[3/4]', offset: 'md:mt-24' },
            { tag: 'Bespoke', title: 'Elegant Pink Bouquet', img: 'https://postfiles.pstatic.net/MjAyNjA0MThfMjYy/MDAxNzc2NDc4MTkxMDcx.jNVJB23qfioLcXBTYRX1EGE9Ysy8ywKIgQHYVEbHeiwg.L7Tl7QhE5Hk8sPoVTr9hynStRQTZLth-t9e86t25PW8g.JPEG/pink-roses-wrapped-white-paper-with-pink-ribbon.jpg?type=w966', aspect: 'aspect-[2/3]', offset: 'md:mt-48' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              className={`group cursor-pointer ${item.offset || ''}`}
            >
              <div className={`overflow-hidden rounded-sm mb-6 ${item.aspect}`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-[22px] font-['Times_New_Roman',_serif] text-brand-green mb-1">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-brand-green/50">{item.tag}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews/Testimonials Section */}
      <section id="reviews" className="py-24 md:py-40 bg-[#F9F7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <motion.div {...fadeIn}>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-brand-green/60 mb-4 block">Client Stories</span>
            <h2 className="text-[35px] font-kopub text-brand-green mb-6 leading-[1.3]">메종블룸과 함께한 소중한 기록들</h2>
            <div className="w-16 h-px bg-brand-green/20 mx-auto" />
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden mb-12">
          {/* Gradient Masks for edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F9F7F2] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F9F7F2] to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            className="flex gap-8 w-max"
            animate={{ 
              x: [0, -1880], // Approximate width of one review set including gaps
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[
              {
                text: "꽃이 너무 싱싱하고 디자인이 정말 고급스러워요. 선물을 받은 분도 너무 좋아하셨습니다. 특별한 날 항상 찾게 되는 곳이에요.",
                author: "김수정 님",
                tag: "Gift Flower"
              },
              {
                text: "플라워 클래스를 들었는데 설명도 친절하시고 공간 자체가 너무 힐링이었어요. 덕분에 나만의 꽃을 만드는 즐거움을 알게 되었습니다.",
                author: "이민호 님",
                tag: "Flower Class"
              },
              {
                text: "웨딩 부케를 여기서 준비했는데 제 드레스랑 찰떡이었어요. 상담부터 세심하게 챙겨주셔서 덕분에 정말 완벽한 결혼식이 되었습니다.",
                author: "박지혜 님",
                tag: "Wedding Flower"
              },
              {
                text: "갑작스러운 주문이었는데도 세심하게 챙겨주셔서 감사합니다. 덕분에 기념일을 아주 로맨틱하게 보낼 수 있었어요.",
                author: "최윤영 님",
                tag: "Bespoke Order"
              },
              {
                text: "매장 분위기도 너무 예쁘고 꽃 향기가 정말 좋아요. 단순히 꽃을 사는 곳이 아니라 예술을 경험하는 기분이 듭니다.",
                author: "정현우 님",
                tag: "Shop Experience"
              }
            ].concat([ // Repeat for seamless loop
              {
                text: "꽃이 너무 싱싱하고 디자인이 정말 고급스러워요. 선물을 받은 분도 너무 좋아하셨습니다. 특별한 날 항상 찾게 되는 곳이에요.",
                author: "김수정 님",
                tag: "Gift Flower"
              },
              {
                text: "플라워 클래스를 들었는데 설명도 친절하시고 공간 자체가 너무 힐링이었어요. 덕분에 나만의 꽃을 만드는 즐거움을 알게 되었습니다.",
                author: "이민호 님",
                tag: "Flower Class"
              },
              {
                text: "웨딩 부케를 여기서 준비했는데 제 드레스랑 찰떡이었어요. 상담부터 세심하게 챙겨주셔서 덕분에 정말 완벽한 결혼식이 되었습니다.",
                author: "박지혜 님",
                tag: "Wedding Flower"
              },
              {
                text: "갑작스러운 주문이었는데도 세심하게 챙겨주셔서 감사합니다. 덕분에 기념일을 아주 로맨틱하게 보낼 수 있었어요.",
                author: "최윤영 님",
                tag: "Bespoke Order"
              },
              {
                text: "매장 분위기도 너무 예쁘고 꽃 향기가 정말 좋아요. 단순히 꽃을 사는 곳이 아니라 예술을 경험하는 기분이 듭니다.",
                author: "정현우 님",
                tag: "Shop Experience"
              }
            ]).map((review, idx) => (
              <div 
                key={idx}
                className="bg-white p-10 rounded-sm border border-brand-stone w-[400px] shrink-0 group relative"
              >
                <Quote size={32} className="text-brand-green/10 mb-8 group-hover:text-brand-green/20 transition-colors" strokeWidth={1} />
                <p className="text-brand-green/80 leading-relaxed mb-10 min-h-[100px] text-lg font-kopub">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-brand-stone pt-6">
                  <span className="text-sm font-medium text-brand-green">{review.author}</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-green/40">{review.tag}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reserve" className="relative py-32 md:py-48 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA0MThfMTA2/MDAxNzc2NDg4OTQ1Nzk2.qpIDEUGqgmlVOyR9wggIyzVPdP4OcgIdluofto53s7Yg.46rMv5s4XRfhX1ws_CvATu_9CmvFUYnsKfa6xd8BjZwg.JPEG/SE-30d7681c-47b0-46fc-8059-a38af471b21e.jpg?type=w966" 
            alt="Maison Bloom atmosphere background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay for text legibility - set to 80% opacity as requested */}
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-[34px] font-serif text-brand-green mb-8 leading-[1.3]">
              당신의 순간을 더 아름답게<br />만들어보세요
            </h2>
            <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed mb-12">
              꽃다발 예약부터<br />플라워 클래스,<br />웨딩 플라워까지<br />메종블룸과 함께<br />가장 특별한 순간을 준비해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-brand-green text-brand-parchment px-12 py-5 text-[16px] tracking-widest font-medium hover:bg-opacity-90 transition-all rounded-sm shadow-xl">
                상담 예약하기
              </button>
              <button className="bg-white border border-brand-stone text-brand-green px-12 py-5 text-[16px] tracking-widest font-medium hover:bg-brand-stone transition-all rounded-sm flex items-center justify-center gap-3">
                <MessageSquare size={16} strokeWidth={1.5} /> 카카오톡 문의
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-stone border-t border-brand-green/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="text-[26px] font-['Times_New_Roman',_serif] font-bold tracking-tight uppercase mb-6">Maison Bloom</div>
              <p className="text-xs text-brand-green/50 uppercase tracking-[0.1em]">© 2024 Maison Bloom.<br />The Heritage Atelier.</p>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green mb-6">Location</h4>
              <p className="text-sm text-brand-green/70">123 Heritage Lane, Floral District<br />Mon - Sat: 10am - 6pm</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green mb-6">Journal</h4>
              <p className="text-sm text-brand-green/70">Provenance<br />Design Notes<br />Archives</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green mb-6">Contact</h4>
              <p className="text-sm text-brand-green/70">+1 (555) 123-4567<br />hello@maisonbloom.com</p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-brand-green/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-10">
              {['Instagram', 'Pinterest', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-brand-green/60 hover:text-brand-green transition-colors">{social}</a>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green/40">Editorial Romanticism Since 1892</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
