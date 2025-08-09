import React from 'react';
import { motion } from 'framer-motion';

const TeamMembers = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	};

	// Team members data
	const teamMembers = [
		{
			name: 'Saran S',
			position: 'President',
			contact: '9840809513',
			image: '/assets/team/saran.png',
			gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
		},
        {
            name: 'Abinaya M',
            position: 'Secretary',
            contact: '9087951148',
            image: '/assets/team/abinaya.jpg',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
		{
            name: 'Jeya Prakash J',
			position: 'Treasurer',
            contact: '7395835201',
			image: '/assets/team/jp.jpg',
			gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
		},
        {
            name: 'Kaamesh P',
            position: 'Vice President',
            contact: '6379961830',
            image: '/assets/team/kaams.jpg',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            name: 'Shalini R',
            position: 'Joint Secretary',
            contact: '9150274864',
            image: '/assets/team/shalini.jpg',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
			name: 'Sanjai N',
			position: 'Joint Treasurer',
			contact: '8508166714',
			image: '/assets/team/sanjai.jpg',
			gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
		}

	];

	return (
		<motion.div
			variants={containerVariants}
			style={{ marginBottom: '5rem' }}
		>
			<motion.h3
				variants={itemVariants}
				style={{
					textAlign: 'center',
					color: '#ff00ff',
					fontSize: '2.2rem',
					marginBottom: '1rem',
					fontWeight: '700',
				}}
			>
				● Our Team Members
			</motion.h3>

			<motion.p
				variants={itemVariants}
				style={{
					textAlign: 'center',
					color: 'white',
					fontSize: '2rem',
					fontWeight: '300',
					marginBottom: '3rem',
					fontStyle: 'italic',
				}}
			>
				Meet our creative team.
			</motion.p>

			<motion.div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
					gap: '2rem',
					maxWidth: '1200px',
					margin: '0 auto',
					padding: '0 1rem',
				}}
				variants={containerVariants}
			>
				{teamMembers.map((member, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						whileHover={{ y: -10, scale: 1.02 }}
						style={{
							background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
							borderRadius: '20px',
							overflow: 'hidden',
							border: '1px solid rgba(255, 255, 255, 0.2)',
							backdropFilter: 'blur(20px)',
							position: 'relative',
							height: '400px',
						}}
					>
						<div
							style={{
								height: '70%',
								background: member.gradient,
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							<img
								src={member.image}
								alt={member.name}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									position: 'absolute',
									top: 0,
									left: 0,
								}}
							/>
						</div>
						<div
							style={{
								padding: '1.5rem 1rem',
								textAlign: 'center',
								height: '30%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
						>
							<h4
								style={{
									color: 'white',
									fontSize: '1.3rem',
									fontWeight: '600',
									margin: '0 0 0.3rem 0',
								}}
							>
								{member.name}
							</h4>
							<p
								style={{
									color: '#00ffff',
									fontSize: '0.95rem',
									fontWeight: '500',
									margin: '0 0 0.3rem 0',
								}}
							>
								{member.position}
							</p>
							<p
								style={{
									color: '#ffd700',
									fontSize: '0.9rem',
									fontWeight: '500',
									margin: 0,
								}}
							>
								📞 {member.contact}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default TeamMembers;
