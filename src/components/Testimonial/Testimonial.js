import React from 'react';
import './testimonial.css';
import testi1 from '../../assets/testi-1.jpg';
import testi2 from '../../assets/testi-2.jpg';
import testi3 from '../../assets/testi-3.jpg';
import testi4 from '../../assets/testi-4.jpg';
const Testimonial = () =>{
    return (
        <div class="container">
	<div class="row">
		<div class="col-sm-12">			
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<h2 className='primary-sec-heading' >Customer <b>Testimonials</b></h2>
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={testi1} alt=""/>										
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Paula Wilson</b></div>
											<div class="details">Media Analyst / SkyNet</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={testi2} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Antonio Moreno</b></div>
											<div class="details">Web Developer / SoftBee</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div class="item carousel-item">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src="/examples/images/clients/3.jpg" alt=""/>										
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Michael Holz</b></div>
											<div class="details">Web Developer / DevCorp</div>											
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={testi3} alt=""/>										
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Mary Saveley</b></div>
											<div class="details">Graphic Designer / MarsMedia</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div class="item carousel-item">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src="/examples/images/clients/5.jpg" alt=""/>										
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Martin Sommer</b></div>
											<div class="details">SEO Analyst / RealSearch</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={testi4} alt=""/>										
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>John Williams</b></div>
											<div class="details">Web Designer / UniqueDesign</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
				</div>
		
				<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-chevron-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
    )
}

export default Testimonial;