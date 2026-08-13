module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      numberOfRuns: 3,
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["warning", { minScore: 0.5 }],
        "categories:accessibility": ["warning", { minScore: 0.5 }],
        "categories:seo": ["warning", { minScore: 0.5 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
