import React, { useState } from 'react';
import growth from './../images/growth.png';
import team from './../images/team.png';
import networking from './../images/networking.png';
import capital from './../images/capital.png';
import research from './../images/research.png';
import business from './../images/bussiness.png';
import impact from './../images/impact.png';

function Homepage() {
	const [modalDisplay, setModalDisplay] = useState("hidden");

	function onBurgerMenuClicked(){
		document.querySelector("#modal").style.animationName = "slideIn"
		setModalDisplay("");
	}

	function onModalOverlayClicked(){
		document.querySelector("#modal").style.animationName = "slideOut"
		setTimeout(() => {
			setModalDisplay("hidden");
		}, "180");
	}

	function onMenuItemClicked(tag){
	    if (tag == '#home') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 200,
		        left: 0,
		        behavior: 'smooth'
	      	})
	    } else if (tag == '#aboutus') {
	    	window.scrollTo({
		        top: document.querySelector(tag).offsetTop- 100,
		        left: 0,
		        behavior: 'smooth'
	    	})
	    } else if (tag == '#ourservices') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 100,
		        left: 0,
		        behavior: 'smooth'
		    })
	    } else if (tag == '#casestudies') {
		    window.scrollTo({
		        top: document.querySelector(tag).offsetTop - 100,
		        left: 0,
		        behavior: 'smooth'
		    })
	    }
	}

	return(
		<>
			<div className="px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				{/*Modal*/}
				<div 
					id="modalOverlay" 
					className={"w-[100%] bg-[#7f808080] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay} 
					onClick={onModalOverlayClicked}>

					<div 
						style={{
							animationName: "slideIn",
							animationDuration: "0.2s"
						}}
						id="modal" 
						className={"w-[260px] bg-[#FFFFFF] fixed top-[0px] left-[0px] h-[100%] " + modalDisplay}>

						<div id="modalContent" className="p-[20px]">
							<div className="flex items-center mb-[40px]">
								<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
								</svg>
								<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
								<span className="text-[30px] font-bold ml-[15px]">ims.</span>
							</div>
							<div className="text-[16px] font-medium">
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
								<div className="mb-[10px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
								<div className="mb-[15px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
								<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
									Contact Us
								</button>
							</div>
						</div>

					</div>

				</div>

				{/*Header*/}
				<div id="header" className="flex items-center justify-between">
					<div className="flex items-center">
						<svg width="50" height="60" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.000305176 10.0115C0.000305176 4.7032 4.30351 0.399994 9.61179 0.399994H23.0679V19.2385C23.0679 24.5468 18.7647 28.85 13.4564 28.85H0.000305176V10.0115Z" fill="#1B1642"/>
						</svg>
						<span className="text-[#FFFFFF] ml-[-38px] font-bold text-[35px]">A</span>
						<span className="text-[30px] font-bold ml-[15px]">ims.</span>
					</div>
					<div className="border-[#2F6AD9] border-[2px] border-solid p-[5px] rounded-[5px] min-[1000px]:hidden cursor-pointer" onClick={onBurgerMenuClicked}>
						<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"/>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
							<g id="SVGRepo_iconCarrier"> <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/> </g>
						</svg>
					</div>

					<div className="flex items-center text-[16px] font-medium max-[999px]:hidden">
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#home')}>Home</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
						<div className="mr-[25px] cursor-pointer" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
						<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
							Contact Us
						</button>
					</div>
				</div>

				{/*fold 1*/}
				<div id="home" className="my-[100px] min-[1100px]:w-[50%]">
					<div className="max-[1000px]:text-[38px] text-[60px] text-[#1B1642] font-bold">Empower Your Startup's Journey with <span className="text-[#2F6AD9]">AIMS.</span></div>
					<div className="text-[20px] leading-[32px] text-[#677788] my-[30px]">
						At AIMS, we partner with founders to build and scale innovative businesses across diverse sectors. From strategic planning to capital acquisition, we're here for every step of your entrepreneurial journey.
					</div>
					<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff] max-[700px]:mx-auto block">
						Contact Us
					</button>
				</div>

				{/*fold 2*/}
				<div id="aboutus" className="text-center">
					<div className="text-[25px] font-bold">About AIMS</div>
					<div className="text-[#677788] text-[20px] leading-[32px] my-[50px] max-w-[1000px] mx-auto">AIMS specializes in nurturing early-stage and expanding businesses. We're sector-agnostic experts passionate about transforming ideas into successful enterprises.</div>
					<div className="min-[1101px]:flex justify-between">
						<div className="w-[400px] rounded-[10px] p-[20px] max-[1101px]:mx-[auto]">
							<div className="flex justify-center">
								<svg width="60" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.330017" width="60" height="60" rx="30" fill="#377DFF" fill-opacity="0.1"/>
									<path d="M45 30.5C45 30.5 39.1875 18 29.5 18C19.8125 18 14 30.5 14 30.5C14 30.5 19.8125 43 29.5 43C39.1875 43 45 30.5 45 30.5ZM16.2721 30.5C16.3824 30.3028 16.5082 30.0836 16.6491 29.8464C17.2979 28.7544 18.2553 27.3021 19.4872 25.8571C21.9845 22.9277 25.3937 20.2727 29.5 20.2727C33.6063 20.2727 37.0155 22.9277 39.5128 25.8571C40.7447 27.3021 41.7021 28.7544 42.3509 29.8464C42.4918 30.0836 42.6176 30.3028 42.7279 30.5C42.6176 30.6972 42.4918 30.9164 42.3509 31.1536C41.7021 32.2456 40.7447 33.6979 39.5128 35.1429C37.0155 38.0723 33.6063 40.7273 29.5 40.7273C25.3937 40.7273 21.9845 38.0723 19.4872 35.1429C18.2553 33.6979 17.2979 32.2456 16.6491 31.1536C16.5082 30.9164 16.3824 30.6972 16.2721 30.5Z" fill="#377DFF"/>
									<path d="M29.5 24.8182C26.8249 24.8182 24.6562 27.362 24.6562 30.5C24.6562 33.638 26.8249 36.1818 29.5 36.1818C32.1751 36.1818 34.3438 33.638 34.3438 30.5C34.3438 27.362 32.1751 24.8182 29.5 24.8182ZM22.7188 30.5C22.7188 26.1068 25.7548 22.5455 29.5 22.5455C33.2452 22.5455 36.2812 26.1068 36.2812 30.5C36.2812 34.8932 33.2452 38.4545 29.5 38.4545C25.7548 38.4545 22.7188 34.8932 22.7188 30.5Z" fill="#377DFF"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[40px]">Building your vision together</div>
							<div className="text-[16px] text-[#677788] mt-[40px]">AIMS specializes in nurturing early-stage and expanding businesses. We're sector-agnostic experts passionate about transforming ideas into successful enterprises.</div>
						</div>
						<div className="w-[400px] max-[999px]:my-[30px] min-[1101px]:mx-[20px] rounded-[10px] p-[20px] max-[1101px]:mx-[auto]">
							<div className="flex justify-center">
								<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="60" height="60" rx="30" fill="#377DFF" fill-opacity="0.1"/>
									<path d="M25 39C23.9391 39 22.9217 38.5786 22.1716 37.8284C21.4214 37.0783 21 36.0609 21 35V23C21 22.4696 21.2107 21.9609 21.5858 21.5858C21.9609 21.2107 22.4696 21 23 21H27C27.5304 21 28.0391 21.2107 28.4142 21.5858C28.7893 21.9609 29 22.4696 29 23V35C29 36.0609 28.5786 37.0783 27.8284 37.8284M25 39C26.0609 39 27.0783 38.5786 27.8284 37.8284M25 39H37C37.5304 39 38.0391 38.7893 38.4142 38.4142C38.7893 38.0391 39 37.5304 39 37V33C39 32.4696 38.7893 31.9609 38.4142 31.5858C38.0391 31.2107 37.5304 31 37 31H34.657M27.8284 37.8284L36.314 29.343C36.6889 28.9679 36.8996 28.4593 36.8996 27.929C36.8996 27.3987 36.6889 26.8901 36.314 26.515L33.485 23.686C33.1099 23.3111 32.6013 23.1004 32.071 23.1004C31.5407 23.1004 31.0321 23.3111 30.657 23.686L29 25.343M25 35H25.01" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[40px]">Our Approach</div>
							<div className="text-[16px] text-[#677788] mt-[40px]"> From setting up your initial team to strategic marketing and financial planning, AIMS is dedicated to ensuring your startup achieves product-market fit and robust early revenue growth.</div>
						</div>
						<div className="w-[400px] rounded-[10px] p-[20px] max-[1101px]:mx-[auto]">
							<div className="flex justify-center">
								<svg width="60" height="63" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="60" height="62.9893" rx="30" fill="#377DFF" fill-opacity="0.1"/>
									<path d="M28 39L32 23M36 27L40 31L36 35M24 35L20 31L24 27" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<div className="text-[18px] font-semibold leading-[28px] text-[#1E2022] mt-[40px]">Sector Agnostic Expertise</div>
							<div className="text-[16px] text-[#677788] mt-[40px]">AIMS is adept across various sectors, including Fintech, Sportstech, MedTech, Edutech, Deeptech, and more. This broad expertise enables us to provide unique insights and tailored solutions for each startup, regardless of their industry.</div>
						</div>
					</div>
				</div>

				{/*fold 3*/}
				<div id="ourservices" className="text-center">
					<div className="text-[32px] font-bold  my-[50px]">Our Services</div>
					<div className="grid min-[1100px]:grid-cols-3 min-[700px]:grid-cols-2 grid-cols-1 gap-[20px]">
						<div className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)] p-[20px] text-left rounded-[10px]">
							<img src={growth} alt="Growth"/>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Strategic Direction</div>
							<div className="text-[#677788]">Crafting a clear path for your business, focusing on market fit and sustainable growth.</div>
						</div>
						<div className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)] p-[20px] text-left rounded-[10px]">
							<img src={team} alt="Team"/>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Team Building and Operation</div>
							<div className="text-[#677788]">Assembling a dynamic team and streamlining operations to maximize efficiency and innovation.</div>
						</div>
						<div className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)] p-[20px] text-left rounded-[10px]">
							<img src={networking} alt="Networking"/>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Marketing and Outreach</div>
							<div className="text-[#677788]">Creating impactful marketing strategies that resonate with your target audience and amplify your reach.</div>
						</div>
						<div className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)] p-[20px] text-left rounded-[10px]">
							<img src={capital} alt="Capital"/>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Capital Planning</div>
							<div className="text-[#677788]">Navigating the complexities of funding, from equity and debt to alternative financial solutions.</div>
						</div>
						<div className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)] p-[20px] text-left rounded-[10px]">
							<img src={research} alt="Research"/>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]">Market Research & Analysis</div>
							<div className="text-[#677788]">Utilizing cutting-edge tools and analytics to understand market trends, customer needs, and competitive landscapes.</div>
						</div>
						<div className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.05)] p-[20px] text-left rounded-[10px]">
							<img src={business} alt="Business"/>
							<div className="text-[20px] text-[#1E2022] font-medium my-[30px]"> Business Scaling Strategies</div>
							<div className="text-[#677788]">Developing scalable business models and strategies to facilitate sustainable growth and expansion.</div>
						</div>
					</div>
				</div>

				{/*fold 4*/}
				<div id="casestudies" className="mt-[70px]">
					<div className="flex items-start">
						<div className="">
							<div className="text-[32px] text-[#1B1642] font-bold">Our Impact</div>
							<div className="text-[20px] text-[#677788] my-[50px]">At AIMS, we empower startups and expanding businesses, guiding them through each stage of growth. From fintech to edutech, and consumer markets to B2B enterprises, our expertise has a broad and profound impact. Here's how we make a difference:</div>
						</div>
						<img className="w-[50%] h-[25%] rounded-[20px] ml-[20px] max-[1000px]:hidden" src={impact} alt="Impact"/>
					</div>
					<div className="min-[700px]:flex">
						<div className="mt-[30px]">
							<div className="text-[#377DFF] text-[32px] font-normal mb-[20px]">100+</div>
							<div className="text-[20px] text-[#677788] leading-[32px]">Over 100 startups have achieved their initial milestones, from product-market fit to early revenue, through our strategic direction and operational support.</div>
						</div>
						<div className="mt-[30px] min-[700px]:mx-[30px]">
							<div className="text-[#377DFF] text-[32px] font-normal mb-[20px]">45+</div>
							<div className="text-[20px] text-[#677788] leading-[32px]">AIMS has worked across a multitude of industries, including Fintech, Sportstech, MedTech, and more, delivering tailored support for each unique business model.</div>
						</div>
						<div className="mt-[30px]">
							<div className="text-[#377DFF] text-[32px] font-normal mb-[20px]">100M$</div>
							<div className="text-[20px] text-[#677788] leading-[32px]">AIMS has successfully guided startups in securing over $200 million in funding through equity, debt, and alternative financial solutions.</div>
						</div>
					</div>
				</div>

				{/*fold 5*/}
				<div className="text-center mt-[100px]">
					<div className="font-bold text-[32px]">Ready to Transform Your Business?</div>
					<div className="text-[20px] font-medium text-[#677788] my-[30px]">Connect with us and take the first step towards realizing your business potential.</div>
					<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
						Contact Us
					</button>
				</div>

			</div>
			<hr className="my-[30px] w-[100%] border-[#67778870] border-[1px] border-solid"/>
			<div className="px-[20px] py-[10px] w-[1200px] max-[1100px]:w-[80%] max-[800px]:w-[90%] max-[600px]:w-[100%] mx-[auto]">
				<div className="flex items-center text-[16px] font-medium justify-end">
					<div className="mr-[25px]" onClick={() => onMenuItemClicked('#home')}>Home</div>
					<div className="mr-[25px]" onClick={() => onMenuItemClicked('#aboutus')}>About Us</div>
					<div className="mr-[25px]" onClick={() => onMenuItemClicked('#ourservices')}>Our Services</div>
					<div className="mr-[25px]" onClick={() => onMenuItemClicked('#casestudies')}>Case Studies</div>
					<button className="bg-[#2F6AD9] px-[20px] py-[15px] rounded-[5px] text-[#ffffff]">
						Contact Us
					</button>
				</div>
			</div>
		</>
	)
}

export default Homepage;