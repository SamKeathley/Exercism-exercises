const earthYears = (seconds) =>
  (factor) =>
    Number((seconds / 31557600 / factor).toFixed(2))

class SpaceAge {
  constructor(seconds){
    this.seconds = seconds
    this.spaceYears = earthYears(seconds)
  }
  onEarth() { return this.spaceYears(1) }
  onMercury() { return this.spaceYears(0.2408467) }
  onVenus() { return this.spaceYears(0.61519726) }
  onMars() { return this.spaceYears(1.8808158) }
  onJupiter() { return this.spaceYears(11.862615) }
  onSaturn() { return this.spaceYears(29.447498) }
  onUranus() { return this.spaceYears(84.016846) }
  onNeptune() { return this.spaceYears(164.79132) }
};

module.exports = SpaceAge;
