import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import { motion } from "motion/react";

import 'swiper/css'
import 'swiper/css/pagination'
import image from '../../assets/iphone.png'
import ps5 from '../../assets/ps5.png'
import dog from '../../assets/dog.png'

const Header = () => {
  const animationVariant = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut", // Easing function
      },
    }
  }

  const textParentVariant = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const textChildVariant = {
    initial: {
      opacity: 0,
      x: -50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }
  return (
    <div className="bg-white mb-[140px]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12">
        <div className="col-span-3  border-r border-gray-200">
          <ul className="flex flex-col gap-4 pt-10">
            <li><Link className="text-base text-black" to=''>Woman’s Gifts</Link></li>
            <li><Link className="text-base text-black" to=''>Men’s Gifts</Link></li>
            <li><Link className="text-base text-black" to=''>Electronics</Link></li>
            <li><Link className="text-base text-black" to=''>Lifestyle</Link></li>
            <li><Link className="text-base text-black" to=''>Medicine</Link></li>
            <li><Link className="text-base text-black" to=''>Sports & Outdoor</Link></li>
            <li><Link className="text-base text-black" to=''>Baby’s & Toys</Link></li>
            <li><Link className="text-base text-black" to=''>Groceries & Pets</Link></li>
            <li><Link className="text-base text-black" to=''>Health & Beauty</Link></li>
          </ul>
        </div>
        <div className="col-span-9 pt-10 pl-10">
          <Swiper
            pagination={{
              dynamicBullets: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className=" ">
              <div className="bg-black h-full flex justify-between items-end">
                <motion.div variants={textParentVariant} initial="initial" whileInView='animate' className="h-full ml-20 pt-20 space-y-8">
                  <motion.div variants={textChildVariant} className="flex items-center gap-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white">Mobile gifts</p>
                  </motion.div>
                  <motion.p variants={textChildVariant} className="text-5xl text-white font-semibold">Up to 10% <br /> off Voucher</motion.p>
                  <motion.p variants={textChildVariant} className="text-base font-medium text-white flex gap-3">
                    <span className="underline">Shop Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </motion.p>
                </motion.div>
                <motion.img variants={animationVariant} initial='initial' whileInView='animate' className="h-60  block mr-20" src={image} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="bg-black h-full flex justify-between items-end">
                <motion.div variants={textParentVariant} initial="initial" whileInView='animate' className="h-full ml-20 pt-20 space-y-8">
                  <motion.div variants={textChildVariant} className="flex items-center gap-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white">Mobile gifts</p>
                  </motion.div>
                  <motion.p variants={textChildVariant} className="text-5xl text-white font-semibold">Up to 10% <br /> off Voucher</motion.p>
                  <motion.p variants={textChildVariant} className="text-base font-medium text-white flex gap-3">
                    <span className="underline">Shop Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </motion.p>
                </motion.div>
                <motion.img variants={animationVariant} initial='initial' whileInView='animate' className="h-60  block mr-20" src={ps5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className="bg-black h-full flex justify-between items-end">
                <motion.div variants={textParentVariant} initial="initial" whileInView='animate' className="h-full ml-20 pt-20 space-y-8">
                  <motion.div variants={textChildVariant} className="flex items-center gap-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white">Mobile gifts</p>
                  </motion.div>
                  <motion.p variants={textChildVariant} className="text-5xl text-white font-semibold">Up to 10% <br /> off Voucher</motion.p>
                  <motion.p variants={textChildVariant} className="text-base font-medium text-white flex gap-3">
                    <span className="underline">Shop Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </motion.p>
                </motion.div>
                <motion.img variants={animationVariant} initial='initial' whileInView='animate' className="h-60  block mr-20" src={dog} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Header

const SwiperCard = () => {

  return (
    <SwiperSlide className=" ">
      <div className="bg-black h-full flex justify-between items-end">
        <motion.div variants={textParentVariant} initial="initial" animate='animate' className="h-full ml-20 pt-20 space-y-8">
          <motion.div variants={textChildVariant} className="flex items-center gap-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
              <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
              <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
            </svg>
            <p className="text-white">Mobile gifts</p>
          </motion.div>
          <motion.p variants={textChildVariant} className="text-5xl text-white font-semibold">Up to 10% <br /> off Voucher</motion.p>
          <motion.p variants={textChildVariant} className="text-base font-medium text-white flex gap-3">
            <span className="underline">Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </motion.p>
        </motion.div>
        <motion.img variants={animationVariant} initial='initial' whileInView='animate' className="h-60  block mr-20" src={image} alt="" />
      </div>
    </SwiperSlide>
  )
}