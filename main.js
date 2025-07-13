const facts = [
    "Earth is the third planet from the Sun.",
    "About 71% of Earth's surface is water.",
    "Earth's atmosphere is mostly nitrogen and oxygen.",
    "Days are getting longer because Earth's rotation is slowing.",
    "Mount Everest is the highest point on Earth.",
    "The Challenger Deep is the lowest point on Earth.",
    "Earth has a magnetic field that protects it.",
    "Earth is not a perfect sphere; it's slightly bulging.",
    "A year on Earth is about 365.25 days.",
    "The Earth's core is very hot, like the Sun's surface.",
    "The Earth's crust is made of tectonic plates.",
    "The Pacific Ocean is the largest ocean.",
    "The Sahara Desert is the largest hot desert.",
    "Earth is about 4.54 billion years old.",
    "The Moon is Earth's only natural satellite.",
    "Earth has about 500,000 earthquakes each year.",
    "The ozone layer protects us from UV radiation.",
    "The atmosphere extends about 10,000 km into space.",
    "Earth's mass is about 5.97 x 10^24 kg.",
    "It would take about an hour to drive to space at 60 mph."
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
