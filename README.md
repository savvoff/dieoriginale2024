## New slider
If you would like to display another one slider on the sitepage - copy/paste the code below
```
{%- assign slider_1 = page.sliders | where: 'label', 'slider_1' -%}
{%- include slider.html slides = slider_1 -%} 
```
... where `slider_1` is the label which you put in your admin panel (_forestry_)
***
## Gallery text
If you write some _description_ you need to depends on a few restrictions: count of symbols and lines.
This is because we want the photo displayed normally (e.g. at the mobile).\
So for the best expirience 
**count of symbols** might be < 150 and
**count of lines** < 5
