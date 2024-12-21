import { ProductProps } from '@/types/types'
import Image from 'next/image'

export default function ProductDisplay({ product }: ProductProps) {
	return (
		<div className='w-full h-full flex flex-col justify-normal space-y-6'>
			<div className='relative w-[220px] h-[270px] p-4'>
				<Image
					className='rounded-lg object-cover'
					src={product.image}
					alt={`${product.name} con id : ${product.id} `}
					fill
					sizes='(max-width: 420px) 100vw'
				/>
			</div>
			<div className='flex flex-col justify-center text-left gap-4'>
				<strong>{product.name}</strong>
				<span>Estado: {product.status}</span>
				<span>Usuario : {product.status}</span>

				<div className='flex flex-row'>
					{[...Array(5)].map((_, index) => (
						<Image
							key={index}
							src={
								index < product.starsCount
									? '/icons/Star-fill.svg'
									: '/icons/Star-blank.svg'
							}
							alt={`estrella ${index + 1}`}
							width={22}
							height={22}
						/>
					))}
				</div>
				<span>{product.starsCount} estrellas</span>
			</div>
		</div>
	)
}
