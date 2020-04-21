const {Marp} = require("@marp-team/marp-core");
const markdownItContainer = require("markdown-it-container");

module.exports = {
  engine: (opts) => {
    const marp = new Marp(opts);

    // plugins
    const addContainerBox = (marp, className, modify = x => x) => {
      const re = new RegExp(`^${className}:?(.*)$`);
      const boxClass = `container-box ${className === "container" ? "" : className}`;
      const headClass = `container-head ${className === "container" ? "" : className + "-head"}`;
      marp.use(markdownItContainer, className, {
        validate: (params) => {
          return params.trim().match(re);
        },
        render: (tokens, idx) => {
          const m = tokens[idx].info.trim().match(re);
          const name = modify(m ? m[1] : "");
          if (tokens[idx].nesting === 1) {
            let ret = `<div class="${boxClass}">`;
            if(name){
              ret += `<p class="${headClass}">${name}</p>`;
            }
            ret += `\n`;
            return ret;
          } else {
            return `</div>\n`;
          }
        }
      });
    };
    addContainerBox(marp, "container");
    addContainerBox(marp, "info", name => name || "info");
    addContainerBox(marp, "warn", name => name || "warn");
    addContainerBox(marp, "theorem", name => "定理" + (name === "" ? "" : " ") + name + ".");

    // style
    const nord = [
      // Polar Night
      "#2E3440", "#3B4252", "#434C5E", "#4C566A",
      // Snow Storm
      "#D8DEE9", "#E5E9F0", "#ECEFF4",
      // Frost
      "#8FBCBB", "#88C0D0", "#81A1C1", "#5E81AC",
      // Aurora
      "#BF616A", "#D08770", "#EBCB8B", "#A3BE8C", "#B48EAD",
    ];
    const theme = marp.themeSet.add(marp.themeSet.pack("default", {
      after: `
        /* @theme nari-default */
        header, footer, section:after {
          color: ${nord[0]};
          font-size: 22px;
        }
        section {
          justify-content: start;
          padding: 50px;
          padding-top: 70px;
          line-height: 1.2;
        }
        section details, section dl, section ol, section p,
        section pre, section table, section ul {
          margin-bottom: 10px;
        }

        /* container */

        .container-box {
          background-color: ${nord[4]};
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 20px;
        }
        .container-box > p {
          padding-left: 10px;
          padding-right: 10px;
        }
        .container-box > p:first-child {
          padding-top: 10px;
        }
        .container-head {
          padding-top: 5px !important;
          background-color: ${nord[0]};
          color: ${nord[6]};
          border-radius: 15px 15px 0 0;
          margin-bottom: 4px;
        }
        .theorem-head, .info-head {
          background-color: ${nord[10]};
        }
        .warn-head {
          background-color: ${nord[11]};
        }
      `,
    }));
    marp.themeSet.addTheme(theme);
    return marp;
  },
};

