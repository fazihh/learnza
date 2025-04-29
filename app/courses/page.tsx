// SSR False
import dynamic from 'next/dynamic'
const Section2 = dynamic(() => import('@/components/sections/courses/Section2'), {
	ssr: false,
})
import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/courses/Section1'
// import Section2 from '@/components/sections/courses/Section2'
export default function Courses() {

	return (
		<>

			<Layout>
				<Section1 />
				<Section2 />
			</Layout>
		</>
	)
}