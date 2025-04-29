import Link from 'next/link'

export default function Section3() {
	return (
		<>

			<section className="elearning-about-section-3 bg-secondary-2 position-relative overflow-hidden py-120 rounded-bottom-4 z-30">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<span className="btn-text fw-bold text-primary">
								<i className="ri-book-marked-fill opacity-25" />
								&nbsp; why choose us
							</span>
							<h2 className="text-anime-style-2">One platform &amp; many courses&nbsp;for you</h2>
							<div className="pe-10 rounded-4 mt-5">
								<div className="position-relative py-5">
									<div className="progress position-relative overflow-visible" role="progressbar" aria-label="Basic example" aria-valuenow={74} aria-valuemin={0} aria-valuemax={74}>
										<div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: '74%' }} />
									</div>
									<span className="position-absolute top-0 start-0 mb-2 fs-7 fw-medium">Work experience</span>
									<span className="text-opacity-50 position-absolute top-0 end-0 mt-2 fs-7 fw-medium">74%</span>
								</div>
								<div className="position-relative py-5">
									<div className="progress position-relative overflow-visible" role="progressbar" aria-label="Basic example" aria-valuenow={95} aria-valuemin={0} aria-valuemax={95}>
										<div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: '95%' }} />
									</div>
									<span className="position-absolute top-0 start-0 mb-2 fs-7 fw-medium">Core solutions</span>
									<span className="text-opacity-50 position-absolute top-0 end-0 mt-2 fs-7 fw-medium">95%</span>
								</div>
								<div className="position-relative py-5">
									<div className="progress position-relative overflow-visible" role="progressbar" aria-label="Basic example" aria-valuenow={34} aria-valuemin={0} aria-valuemax={34}>
										<div className="progress-bar rounded-pill wow img-custom-anim-left" style={{ width: '34%' }} />
									</div>
									<span className="position-absolute top-0 start-0 mb-2 fs-7 fw-medium">Design &amp; development</span>
									<span className="text-opacity-50 position-absolute top-0 end-0 mt-2 fs-7 fw-medium">34%</span>
								</div>
							</div>
							<Link href="/contact" className="btn btn-primary mt-4 hover-up">
								<span>get a quote</span>
								<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
									<g clipPath="url(#clip0_1362_1901)">
										<path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
									</g>
								</svg>
							</Link>
						</div>
						<div className="col-lg-7 text-lg-end mt-lg-0 mt-5">
							<img className="rounded-4" data-aos="fade-left" src="/assets/imgs/pages/learning/page-about/img-3.png" alt="AstraX" />
						</div>
					</div>
				</div>
				<div className="container pt-120">
					<div className="row flex-wrap align-items-center">
						<div className="col-lg-4 swipper-root">
							<span className="btn-text fw-bold text-primary">
								<i className="ri-book-marked-fill opacity-25" />
								&nbsp; popular courses
							</span>
							<h2 className="text-anime-style-2">
								Astrax one of the<br />
								best
								<span className="position-relative">
									eLearning
									<span className="position-absolute top-0 start-0 pt-5 z-0 d-none d-lg-block">
										<svg xmlns="http://www.w3.org/2000/svg" width={221} height={22} viewBox="0 0 221 22" fill="none">
											<path d="M2 20C58.4673 12.6711 180.922 -1.06621 219 2.61526" stroke="#D5D52B" strokeWidth={3} strokeLinecap="round" />
										</svg>
									</span>
								</span>
							</h2>
						</div>
						<div className="col-lg-7 ms-lg-auto mt-3 mt-lg-0">
							<div className="position-relative row justify-content-lg-end justify-content-center mt-5">
								<div className="col-lg-3 col-md-4 col-6">
									<div>
										<h2 className="count mb-0"><span className="odometer text-nowrap" data-count={1200} />+</h2>
										<p>We offer a wide range of digital marketing</p>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-6">
									<div>
										<h2 className="count mb-0"><span className="odometer text-nowrap" data-count={59} /></h2>
										<p>We offer a wide range of digital marketing</p>
									</div>
								</div>
								<div className="col-lg-3 col-md-4 col-6">
									<div>
										<h2 className="count mb-0"><span className="odometer text-nowrap" data-count={32} /></h2>
										<p>We offer a wide range of digital marketing</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
