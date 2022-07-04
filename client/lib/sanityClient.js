import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'yebzicr5',
    dataset : 'production',
    apiVersion: 'v1',
    token:'skvXs89K6KnHJdrJIwht8tVpOtC3W2HFEbQvMmj30YI5ahJkeu9Vk18Vg69qqM35dFm1yIm0qCdQTaK8ju02PcB8VzdtjzFH3tK4flxBrrtX8RIJcbe5OCKQP8mNG6CcD2sFVprEVG7Vn2EuigvZDWeYYfDNw6Een76m5OW3YVDQEZFdqtUh',
    useCdn: false,
    ignoreBrowserTokenWarning: true,

})