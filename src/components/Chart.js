export class Chart {
  constructor(ctx, config) {
    this.chart = new window.Chart(ctx, {
      ...config,
      options: {
        ...config.options,
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  update(data) {
    this.chart.data = data;
    this.chart.update();
  }

  destroy() {
    this.chart.destroy();
  }
}