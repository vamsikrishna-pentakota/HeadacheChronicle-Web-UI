import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Daily Journaling',
    description:
      'Capture the details of your daily activities, including sleep, diet, stress levels, and more.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Pattern Analysis',
    description:
      'Track and analyze your migraines over time to identify triggers and understand your unique patterns.',
    icon: LockClosedIcon,
  },
  {
    name: 'Personalized Insights',
    description:
      'Receive personalized insights and recommendations based on your recorded data to better manage your migraines.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Privacy First',
    description:
      'Your health information is private and secure. HeadacheChronicle prioritizes the confidentiality of your data.',
    icon: FingerPrintIcon,
  },
]

export default function HomeFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Putting technology in use to alleviate pain</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Key Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Ready to embark on a journey towards a clearer understanding of your migraines? Join HeadacheChronicle today and take the first step toward a more empowered and pain-free life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
