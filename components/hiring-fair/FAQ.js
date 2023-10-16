

export function FAQs(props) {
    return (
        <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pt-12 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pb-32">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
            <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                {props.content.map((faq, i) => (
                    <div key={i} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt className="text-base font-semibold leading-7 text-white lg:col-span-5">{faq.fields.question}</dt>
                        <dd className="mt-4 lg:col-span-7 lg:mt-0">
                            <p className="text-base leading-7 text-white">{faq.fields.answer}</p>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}