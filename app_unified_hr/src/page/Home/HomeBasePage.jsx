import React from 'react';
import { Container, Box, styled, Paper, Grid } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Navbar from './../../components/Navbar/Navbar';
import LeftSideBar from '../../components/left_Side_Bar/LeftSideBar';
const Container1 = styled(Container)({
	height: '100svh',
	width: '100vw',
	padding: '0.2rem',
	paddingTop: '0',
	position: 'relative',
});

const TopSec = styled(Box)({
	width: '100%',
	height: '4rem',
	display: 'flex',
	justifyContent: 'center;',
	alignItems: 'center',
	position: 'fixed',
	top: '0',
	left: '0',
	zIndex: '1000',
});
const BottomSec = styled(Box)({
	width: '100%',
	height: 'calc(100svh - 4rem)',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: 'blue',
	position: 'fixed',
	top: '4rem',
	left: '0',
});

const LeftBox = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	background:
		'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,203,217,1) 76%)',
});

const RightBox = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	backgroundColor: 'red',
});

const HomeBase = () => {
	return (
		<React.Fragment>
			<Container1 maxWidth={false}>
				<TopSec>
					<Navbar></Navbar>
				</TopSec>

				<BottomSec className='bottomSec'>
					<Box
						sx={{
							flex: '1',
							display: { xs: 'none', sm: 'flex' },
							width: '100%',
						}}
					>
						<LeftBox className='leftBox'>
							<LeftSideBar></LeftSideBar>
						</LeftBox>
					</Box>

					<Box
						sx={{
							flex: '5',
							height: '100%',
							width: '100%',
							overflowY: 'scroll',
						}}
					>
						<RightBox className='rightBox'>
							<Box>
								<Paper
									style={{
										padding: '1rem',
										margin: '1rem',
										height: '100%',
									}}
									variant='outlined'
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tempora placeat expedita, nesciunt corporis ad commodi
									delectus labore, similique enim dignissimos, nostrum a
									recusandae sequi nihil. Repudiandae voluptatibus, vero
									voluptate explicabo impedit perferendis harum expedita
									inventore ullam corporis magnam ratione laborum quam eos totam
									obcaecati fuga alias voluptas debitis, ad modi. Eos aliquid
									autem, tempore quae odit alias nostrum earum! Corrupti
									aliquid, dolore, nisi error consequatur explicabo similique
									totam officia vitae perferendis facilis dolor tenetur impedit
									minima natus illum doloremque in, nihil reiciendis possimus
									velit? Eveniet perspiciatis quaerat dolorum voluptates
									voluptatibus ipsam quae, magni quod minus ipsa assumenda ullam
									quam expedita sed placeat mollitia velit. Illo, quibusdam
									autem. Quod velit a eum, possimus nihil voluptates temporibus
									provident at explicabo, molestias asperiores ex cum quas
									mollitia quis in saepe? Nostrum sint dicta nemo molestias
									voluptatibus adipisci soluta et iure doloribus. Non
									consequatur, nulla saepe tempore voluptate ullam quas sint.
									Ipsum dolor, dolorem quia eos quaerat sapiente fugit earum
									accusantium corporis, eius quis facilis hic labore mollitia
									saepe, itaque perspiciatis eaque vel excepturi fugiat deleniti
									accusamus. Voluptatem sint, recusandae vitae accusamus facilis
									consequatur sequi possimus quaerat, libero doloribus
									inventore? Numquam dicta sed consectetur consequatur tempore
									sequi mollitia, exercitationem, iusto distinctio voluptas
									minima eveniet nostrum praesentium similique iste. Error
									delectus harum ea molestiae? Suscipit voluptas placeat
									cupiditate temporibus corporis nulla, cum hic repudiandae
									impedit dicta in a illum maxime laudantium consequuntur ut
									dignissimos animi, neque ab. Quo voluptates voluptatem
									impedit, tempora reprehenderit quas est pariatur at non alias
									porro perferendis saepe sequi ipsa quae sunt magnam quaerat
									eum, quos amet, corrupti magni iste provident. Repudiandae est
									quaerat harum laborum vero autem, quia soluta nulla similique
									a cum, voluptas quibusdam. At quod iusto eum maiores, error
									similique saepe consequatur soluta amet, aliquid id? Repellat
									sapiente excepturi eaque possimus alias veritatis quaerat
									aspernatur, obcaecati nisi. Voluptates architecto ipsum alias
									et? Ratione, commodi totam? Molestias voluptates quia, est
									ipsa voluptatibus culpa magnam? Tempore sit tenetur, velit
									sequi non veniam facere ipsa eveniet? Magnam repellendus at
									inventore ad aut modi unde ducimus? Quia, nihil impedit.
									Perfere minima. Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Accusamus nesciunt, incidunt ipsam ab autem
									consectetur! Quod veritatis necessitatibus maxime? Repudiandae
									vitae id pariatur natus, alias necessitatibus adipisci
									consequatur laboriosam, accusantium ea tenetur, tempore nulla
									libero in! Repellat inventore aut ratione repudiandae.
									Sapiente nisi recusandae mollitia qui. Perspiciatis id,
									officia veniam veritatis mollitia iusto tenetur distinctio
									laboriosam voluptatem voluptates optio, labore corporis
									tempora, explicabo ipsum laborum! Quibusdam cumque at
									molestias pariatur reiciendis nam nobis, consequuntur nemo
									consequatur quos animi repudiandae sed? In, quaerat
									dignissimos corporis hic quos nobis debitis non aperiam unde
									ex animi? Deserunt fuga nostrum quisquam debitis! Tenetur,
									voluptatum alias temporibus sint eius sed placeat aliquid
									numquam consequuntur, quas unde ex in aperiam. Adipisci nam
									sit quam temporibus laborum sequi, quaerat exercitationem
									repellendus hic officia aut praesentium odio perferendis
									commodi magni ea nulla fugit. Sapiente impedit mollitia
									numquam cumque iste odit quasi consequuntur debitis at nobis
									vel asperiores voluptatem hic aspernatur obcaecati, quos fuga
									commodi! Magnam ex impedit eius illum itaque, explicabo
									incidunt blanditiis harum rem sapiente, natus laborum odio
									earum recusandae voluptatibus soluta voluptas nulla iusto
									dolorum! Enim iure quaerat eligendi illum rem perspiciatis
									rerum ab ullam laudantium necessitatibus aut tempore
									molestias, fugit dignissimos eum dolorem odit beatae illo
									delectus. Voluptatem vitae iste sequi cum, possimus repellat
									non repudiandae voluptate alias officia neque saepe commodi
									voluptates suscipit mollitia, dicta ea placeat a. Delectus,
									minima et! Cupiditate soluta quam itaque at atque sequi fugiat
									id rerum consectetur, eius harum similique dicta nesciunt
									consequuntur ea! Blanditiis, minus provident nulla sit facilis
									non earum nostrum, sunt assumenda illo, neque dolore quos iste
									doloremque ea accusamus amet recusandae saepe laudantium
									tenetur explicabo beatae dignissimos nam. Aliquid eum rerum
									accusamus, eligendi excepturi temporibus voluptatibus
									aspernatur officia, perspiciatis quibusdam eveniet culpa fuga,
									ipsam et necessitatibus dolor laborum nemo voluptatem dolores
									assumenda. Odit saepe quos provident. Asperiores praesentium
									quae repudiandae sed libero optio, hic fuga voluptatibus ut
									excepturi laboriosam ea, nostrum qui minima ducimus dolores,
									tenetur similique enim modi cum eius perferendis eum. Aliquam
									dolorum ipsam, illum similique consectetur cumque optio porro
									at culpa dicta minus praesentium officiis amet magnam,
									voluptatibus id aspernatur reprehenderit laborum vero sint.
									Eos, consequatur atque soluta consectetur voluptas labore ut
									cupiditate debitis quo eaque aut impedit id blanditiis hic
									dolore illo praesentium. Saepe possimus in sequi a earum
									adipisci quisquam labore tempore maxime velit fugiat sed
									tenetur enim nihil exercitationem cum pariatur, amet et eius.
									Veniam provident quia accusamus, sint nostrum rem, dicta,
									commodi libero quibusdam aspernatur corrupti earum! Tempora
									natus dolor perferendis labore ratione? Praesentium, rem amet
									nisi minima, delectus omnis, impedit excepturi iste illo
									laudantium fugit ratione ipsum libero? Doloribus perferendis
									est quo quasi voluptatum atque autem vero quaerat porro illo.
									Sint error animi ipsum fugiat quos voluptatibus sed autem
									fugit! Sed error rerum libero minima, illum repellat natus,
									quia omnis est quasi accusantium modi ipsum architecto,
									placeat voluptas. Nesciunt, fugit. Nostrum sunt et inventore
									corporis sint, itaque voluptates, doloribus sed fugiat facere
									quidem assumenda quos placeat modi dolore ex quaerat saepe
									aliquid? Recusandae architecto fugiat tempora adipisci.Kunal
									Dixit Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Sit ut eum, quos illo ad doloribus fugiat vero. Nobis
									cupiditate sapiente inventore labore autem vel minima rem
									molestiae accusantium a praesentium perferendis consectetur
									quam et magnam eum fugiat nam natus nemo quisquam animi
									ducimus, ea dolorem. Nulla nihil itaque laboriosam vero
									officiis? Dicta iure porro iusto facere? Necessitatibus,
									blanditiis corrupti accusamus excepturi sequi quos ad, modi
									eveniet optio quas consectetur nisi aliquid, vel dicta nemo
									non voluptas. Itaque reprehenderit quasi sit magnam illum
									praesentium saepe repellat officia eaque dolorum, porro soluta
									necessitatibus laudantium fugit nisi consectetur dolores
									maxime unde alias non architecto similique maiores voluptate!
									Tempora ullam accusamus consectetur ducimus aliquid
									consequatur dicta aspernatur, unde possimus quibusdam
									praesentium enim libero, dolorem dignissimos ad quo itaque,
									totam aperiam eligendi iste incidunt id qui? Provident iusto
									aspernatur quaerat repudiandae nulla possimus, molestiae
									quisquam dolorum quas vitae iure, distinctio dolor adipisci
									aut. Eum ullam cum minima cumque totam? Quo soluta cumque et
									repellendus quia nam blanditiis sed laudantium doloribus
									magnam dolores dolorum sint, odit eveniet aut omnis rem natus
									eligendi voluptates provident quibusdam distinctio voluptas
									perferendis. Repellendus, explicabo, labore numquam quam
									repellat necessitatibus, obcaecati soluta tempora delectus
									magnam reprehenderit aliquam. Excepturi atque voluptatem ipsum
									unde rerum eligendi accusantium, sint voluptatum corrupti
									iusto nemo laborum adipisci fugit porro alias aliquam vero
									suscipit iste! Id nulla veritatis deserunt vero vitae dolore
									minima cumque optio iusto suscipit commodi ipsum ducimus
									praesentium a necessitatibus, eum ex facere laboriosam
									corporis! Iste sapiente quasi incidunt doloremque nihil amet
									recusandae et dolores ullam, obcaecati officia officiis dicta
									facere quis dolor voluptate temporibus. Deserunt quis tempora
									maxime, est reiciendis laboriosam et vitae a totam nobis ab
									autem alias aspernatur sapiente. Voluptatibus nisi sint
									molestias quam nostrum nihil! Qui et amet accusamus nesciunt
									ex quidem harum unde, odio quisquam, architecto nulla natus
									maiores, consectetur quod necessitatibus labore a! Error quas
									assumenda molestiae rerum debitis ipsum id, natus ipsa hic
									temporibus harum ad ipsam voluptatum sapiente a deleniti
									blanditiis! Illum nulla ex, dolores at eligendi magnam
									cupiditate eaque aut modi consequatur soluta repellendus quod
									dolorum, facere sint? Ipsa illum odit perferendis ab ea, a
									molestias obcaecati fuga aut in corrupti officia, veritatis
									officiis iusto porro id minima ad mollitia, molestiae cum?
									Doloremque placeat suscipit ullam eveniet, laboriosam quaerat
									omnis perspiciatis nesciunt asperiores assumenda molestias
									dolorem explicabo? Laudantium beatae sed quod nemo molestiae
									repellat! Vel quibusdam voluptate maxime. Totam beatae porro
									adipisci aut quia at est minima reprehenderit inventore iusto
									pariatur, laborum possimus praesentium ullam eligendi voluptas
									quidem sunt soluta itaque sint corporis, eius numquam. Fugit
									unde pariatur minus perferendis non, in nostrum ipsum ad
									laudantium. Aliquid libero dicta eaque, odit sit, dolore,
									voluptatem minus deleniti atque adipisci laboriosam maiores
									tempore. Nemo aliquid molestiae eaque quis eos obcaecati?
									Illo, quia ipsa excepturi voluptatibus repudiandae praesentium
									iure ut nesciunt tenetur. Quasi itaque, consectetur at
									obcaecati placeat ad nobis quod ab eaque. Sapiente eius unde
									reiciendis, minus sequi accusamus neque quis, ipsum molestiae
									omnis in molestias qui saepe nam excepturi, labore nemo. Porro
									voluptates natus id minus?
								</Paper>
							</Box>
						</RightBox>
					</Box>
				</BottomSec>
			</Container1>
		</React.Fragment>
	);
};

export default HomeBase;
