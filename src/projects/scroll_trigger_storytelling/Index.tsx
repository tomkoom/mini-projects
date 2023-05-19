import { FC } from "react";
import "./Index.scss";

// https://stackblitz.com/edit/react-cxv92j?file=src%2FApp.js
// https://greensock.com/scrolltrigger/
// https://codepen.io/GreenSock/pen/ExKWLey

const Index: FC = (): JSX.Element => {
	return (
		<div>
			<div className="header">
				<h1>header</h1>
			</div>

			<div className="section">
				<div className="vert-timeline">
					<div className="vert-timeline__wrap">
						<div className="vert-timeline__left">
							<div className="vert-timeline__text" data-marker-content="img1">
								<div className="vert-timeline__year">1990</div>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis ipsa earum dolores eum distinctio.
								</p>
							</div>

							<div className="vert-timeline__text" data-marker-content="img2">
								<div className="vert-timeline__year">1992</div>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis ipsa earum dolores eum distinctio.
								</p>
							</div>

							<div className="vert-timeline__text" data-marker-content="img2">
								<div className="vert-timeline__year">1997</div>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis ipsa earum dolores eum distinctio.
								</p>
							</div>

							<div className="vert-timeline__text" data-marker-content="img2">
								<div className="vert-timeline__year">1999</div>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis ipsa earum dolores eum distinctio.
									Integer id lorem eget massa fermentum elementum.
								</p>
							</div>

							<div className="vert-timeline__text" data-marker-content="img3">
								<div className="vert-timeline__year">2000</div>

								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illo laudantium nulla? Mollitia cupiditate
									ad omnis maiores quasi laudantium voluptas necessitatibus sapiente minima minus qui nobis culpa nisi deserunt
									in eligendi, nesciunt vitae architecto vero fugiat velit. Autem impedit maiores accusantium unde perspiciatis,
									molestiae, ullam natus provident a at laborum!
								</p>
							</div>
						</div>

						<div className="vert-timeline__img-wrap">
							<img src="https://placehold.it/800x800/000" id="img1" className="d-block imageToShow" />
							<img src="https://placehold.it/800x800/2649eb" id="img2" className="d-block imageToShow" />
							<img src="https://placehold.it/800x800/ff0000" id="img3" className="d-block imageToShow" />
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<h2>Section Heading</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra efficitur augue, ac sagittis dui viverra
					vitae. Cras vitae faucibus dolor, et tincidunt elit. Integer id lorem eget massa fermentum elementum. In fringilla
					aliquam mollis. Sed sit amet orci vitae nisi pellentesque scelerisque. Aenean enim velit, eleifend non elementum a,
					venenatis eu ligula. Cras cursus nulla eu arcu vestibulum, id tempor dui finibus. Phasellus vel pulvinar orci.
					Aenean ut iaculis mi, vitae hendrerit sapien. Praesent vehicula lorem ac commodo convallis. Maecenas tempor sodales
					lectus, sit amet sollicitudin massa vehicula non. Sed at ultrices est. Praesent egestas odio ac imperdiet sagittis.
					Suspendisse potenti. Praesent feugiat leo et congue vulputate. Nam non venenatis lorem.
				</p>
				<p>
					Pellentesque blandit nibh sem, eu mattis justo tincidunt in. Mauris sed nibh eros. Nam aliquam urna et rhoncus
					consequat. Phasellus sollicitudin sem nec ante laoreet, eget vehicula tellus ornare. Nulla ultrices suscipit purus
					vel eleifend. Cras sed facilisis ipsum, vitae pellentesque leo. Proin nisi turpis, pellentesque iaculis commodo in,
					vulputate non arcu. Aenean nec malesuada mauris. Nulla non tempor leo, eget sodales sem. Quisque sed urna vitae
					magna bibendum hendrerit. Sed vel blandit est. Nullam pulvinar ante at ante lacinia, at dapibus arcu facilisis.
				</p>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Index;
