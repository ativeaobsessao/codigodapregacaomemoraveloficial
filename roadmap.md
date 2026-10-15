# Performance V2
- [x] Make both demonstration videos click-to-load with existing posters; verified zero MP4 requests before play.
- [x] Defer both existing pixels without losing early checkout events; verified both initialized and checkout event invoked.
- [x] Preconnect Kiwify and defer rendering of below-fold sections.
- [x] Test poster UI, source loading, upsell, checkout event and routing; tests pass, build OK.
- [ ] Measure V2 production transfer and slow-4G LCP — blocked until user publishes the changes; localhost serves development code, not compressed production output. Current local image/font transfer is ~418KB at 6 seconds, not a production page-weight result.
- [ ] Verify playback on H.264-capable browser and both event transmissions/Meta receipt — sandbox Chromium lacks H.264 decoding; Pixel Helper is unavailable and initialization does not establish receipt.