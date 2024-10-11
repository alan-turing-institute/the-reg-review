<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import cloud from "d3-cloud";
  import { select } from "d3-selection";
  import { scaleOrdinal } from "d3-scale";
  import * as CS from "d3-scale-chromatic";

  // event dispatcher
  const dispatch = createEventDispatcher();

  // color scheme
  const color_scheme = {
    schemeCategory10: CS.schemeCategory10,
    schemeAccent: CS.schemeAccent,
    schemeDark2: CS.schemeDark2,
    schemePaired: CS.schemePaired,
    schemePastel1: CS.schemePastel1,
    schemePastel2: CS.schemePastel2,
    schemeSet1: CS.schemeSet1,
    schemeSet2: CS.schemeSet2,
    schemeSet3: CS.schemeSet3,
    schemeTableau10: CS.schemeTableau10,
  };

  // props
  export let words;
  export let width;
  export let height;
  export let font = "Fira Sans";
  // Fudge factor to make it more likely for all words to fit
  export let maxFontSize = Math.floor(height / words.length);
  export let minRotate = 0;
  export let maxRotate = 0;
  export let scheme = "schemePaired";
  export let padding = 2;
  export let backgroundColor = "#fff"

  // count max word occurence
  const maxWordCount = words.reduce((prev, cur) =>
    prev.count < cur.count ? prev.count : cur.count
  );

  // text color scheme
  const fill = scaleOrdinal(color_scheme[scheme]);

  function redraw() {
      select("#wordcloud").selectAll("*").remove();
      const layout = cloud()
        .size([width, height])
        .words(words)
        .padding(padding)
        .rotate(() => ~~(Math.random() * maxRotate) + minRotate)
        .font(font)
        .fontSize(
          (d) =>  Math.floor((d.count / maxWordCount) * maxFontSize)
        )
        .on("end", drawInner);

      function drawInner(ws) {
        select("#wordcloud")
          .append("svg")
          .attr("width", layout.size()[0])
          .attr("height", layout.size()[1])
          .append("g")
          .attr(
            "transform",
            "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
          )
          .selectAll("text")
          .data(ws)
          .enter()
          .append("text")
          .style("font-size", (d) => d.size + "px")
          .style("font-family", font)
          .style("fill", (_d, i) => fill(i))
          .attr("text-anchor", "middle")
          .attr(
            "transform",
            (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"
          )
          .text((d) => d.text);
      }

      layout.start();
  }

  // mount
  onMount(async () => redraw());
</script>

<div id="wordcloud" style="background-color: {backgroundColor};"></div>

<style>
    div#wordcloud {        
        width: fit-content; 
        height: fit-content;        
    }
</style>
