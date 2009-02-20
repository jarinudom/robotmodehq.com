

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
 <script type="text/javascript">
 
 
 
 var codesite_token = null;
 
 
 </script>
 <title>jquery.form.js - 
 jqueryjs -
 
 Google Code</title>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/230875406810562827/css/d_20081117.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/230875406810562827/css/d_sb_20080522.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/230875406810562827/css/d_ie.css" >
<![endif]-->
</head>
<body class="t4">
 <div id="gaia">
 
 <span>
 
 <a href="/p/support/wiki/WhatsNew" style="color:#a03">What's new?</a>
 | <a href="/p/support/">Help</a>
 | <a href="/more/">Directory</a>
 | <a href="http://www.google.com/accounts/Login?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fjqueryjs%2Fsource%2Fbrowse%2Ftrunk%2Fplugins%2Fform%2Fjquery.form.js&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fjqueryjs%2Fsource%2Fbrowse%2Ftrunk%2Fplugins%2Fform%2Fjquery.form.js">Sign in</a>
 
 </span>

 </div>
 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
 <table style="padding:0px; margin: 20px 0px 0px 0px; width:100%" cellpadding="0" cellspacing="0">
 <tr>
 <td style="width:153px; text-align:center;">
 <a href="/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/code_sm.png"
 width="153" height="55" alt="Google">
 
 </a>
 </td>
 <td style="padding-left: 0.8em">
 
 <div id="pname" style="margin: 0px 0px -3px 0px">
 <a href="/p/jqueryjs/" style="text-decoration:none; color:#000">jqueryjs</a>
 </div>
 <div id="psum">
 <i><a id="project_summary_link" href="/p/jqueryjs/" style="text-decoration:none; color:#000">jQuery JavaScript Library</a></i>
 </div>
 
 </td>
 <td style="white-space:nowrap; text-align:right">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="">
 <input type="submit" name="projectsearch" value="Search Projects" >
 </form>
 
 </tr>
 </table>


<table id="mt" cellspacing="0" cellpadding="0" width="100%" border="0">
 <tr>
 <th onclick="if (!cancelBubble) _go('/p/jqueryjs/');">
 <div class="tab inactive">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <a onclick="cancelBubble=true;" href="/p/jqueryjs/">Project&nbsp;Home</a>
 </div>
 </div>
 </th><td>&nbsp;&nbsp;</td>
 
 
 
 
 <th onclick="if (!cancelBubble) _go('/p/jqueryjs/downloads/list');">
 <div class="tab inactive">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <a onclick="cancelBubble=true;" href="/p/jqueryjs/downloads/list">Downloads</a>
 </div>
 </div>
 </th><td>&nbsp;&nbsp;</td>
 
 
 
 
 
 
 
 
 
 <th onclick="if (!cancelBubble) _go('/p/jqueryjs/source/checkout');">
 <div class="tab active">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <a onclick="cancelBubble=true;" href="/p/jqueryjs/source/checkout">Source</a>
 </div>
 </div>
 </th><td>&nbsp;&nbsp;</td>
 
 
 <td width="100%">&nbsp;</td>
 </tr>
</table>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td>
 
<div class="st2">
 <div class="isf">
 <span class="inst1"><a href="/p/jqueryjs/source/checkout">Checkout</a></span> |
 <span class="inst2"><a href="/p/jqueryjs/source/browse/">Browse</a></span> |
 <span class="inst3"><a href="/p/jqueryjs/source/list">Changes</a></span> |
 <form action="http://www.google.com/codesearch" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value + ' package:http://jqueryjs\\.googlecode\\.com'">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input maxlength="2048" size="35" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 </form>
 </div>
</div>


 </td>
 
 
 
 
 
 <td height="4" align="right" valign="top" class="bevel-right">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 </td>
 </tr>
</table>
<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>

<div id="maincol">
<!-- IE -->



<div class="expand">


<style type="text/css">
 #file_flipper { display: inline; float: right; white-space: nowrap; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<div id="nav_and_rev" class="heading">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div class="">
 <div class="src_crumbs src_nav">
 <strong class="src_nav">Source Path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/jqueryjs/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/jqueryjs/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span><a href="/p/jqueryjs/source/browse/trunk/plugins/">plugins</a><span class="sp">/&nbsp;</span><a href="/p/jqueryjs/source/browse/trunk/plugins/form/">form</a><span class="sp">/&nbsp;</span>jquery.form.js</span>
 
 </div>
 
 </div>
 
 <div class="pagination" style="margin-left: 2em">
 <a href="/p/jqueryjs/source/browse/trunk/plugins/form/jquery.form.js?r=5926" title="Prev">&lsaquo; r5926</a>
 <b>r6247</b>
 
 </div>
 
 
 <div style="clear:both"></div>
 </div>
</div>

<style type="text/css">
 
 #nums td:target a {color:black; font-weight:bold}
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

</style>
<div class="fc">
 


<table class="opened" id="review_comment_area"><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>

<pre><table><tr id="gr_svn6061_1"><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn6061_2"><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn6061_3"><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn6061_4"><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn6061_5"><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn6061_6"><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn6061_7"><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn6061_8"><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn6061_9"><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn6061_10"><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn6061_11"><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn6061_12"><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn6061_13"><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn6061_14"><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn6061_15"><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn6061_16"><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn6061_17"><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn6061_18"><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn6061_19"><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn6061_20"><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn6061_21"><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn6061_22"><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn6061_23"><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn6061_24"><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn6061_25"><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn6061_26"><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn6061_27"><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn6061_28"><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn6061_29"><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn6061_30"><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn6061_31"><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn6061_32"><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn6061_33"><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn6061_34"><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn6061_35"><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn6061_36"><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn6061_37"><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn6061_38"><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn6061_39"><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn6061_40"><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn6061_41"><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn6061_42"><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn6061_43"><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn6061_44"><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn6061_45"><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn6061_46"><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn6061_47"><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn6061_48"><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn6061_49"><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn6061_50"><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn6061_51"><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn6061_52"><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn6061_53"><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn6061_54"><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn6061_55"><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn6061_56"><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn6061_57"><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn6061_58"><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn6061_59"><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn6061_60"><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn6061_61"><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn6061_62"><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn6061_63"><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn6061_64"><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn6061_65"><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn6061_66"><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn6061_67"><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn6061_68"><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn6061_69"><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn6061_70"><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn6061_71"><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn6061_72"><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn6061_73"><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn6061_74"><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn6061_75"><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn6061_76"><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn6061_77"><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn6061_78"><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn6061_79"><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn6061_80"><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn6061_81"><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn6061_82"><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn6061_83"><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn6061_84"><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn6061_85"><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn6061_86"><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn6061_87"><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn6061_88"><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn6061_89"><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn6061_90"><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn6061_91"><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn6061_92"><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn6061_93"><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn6061_94"><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn6061_95"><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn6061_96"><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn6061_97"><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn6061_98"><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn6061_99"><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn6061_100"><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn6061_101"><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn6061_102"><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn6061_103"><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn6061_104"><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn6061_105"><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn6061_106"><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn6061_107"><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn6061_108"><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn6061_109"><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn6061_110"><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn6061_111"><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn6061_112"><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn6061_113"><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn6061_114"><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn6061_115"><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn6061_116"><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn6061_117"><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn6061_118"><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn6061_119"><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn6061_120"><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn6061_121"><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn6061_122"><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn6061_123"><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn6061_124"><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn6061_125"><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn6061_126"><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn6061_127"><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn6061_128"><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn6061_129"><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn6061_130"><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn6061_131"><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn6061_132"><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn6061_133"><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn6061_134"><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn6061_135"><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn6061_136"><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn6061_137"><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn6061_138"><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn6061_139"><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn6061_140"><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn6061_141"><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn6061_142"><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn6061_143"><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn6061_144"><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn6061_145"><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn6061_146"><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn6061_147"><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn6061_148"><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn6061_149"><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn6061_150"><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn6061_151"><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn6061_152"><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn6061_153"><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn6061_154"><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn6061_155"><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn6061_156"><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn6061_157"><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn6061_158"><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn6061_159"><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn6061_160"><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn6061_161"><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn6061_162"><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn6061_163"><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn6061_164"><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn6061_165"><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn6061_166"><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn6061_167"><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn6061_168"><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn6061_169"><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn6061_170"><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn6061_171"><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn6061_172"><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn6061_173"><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn6061_174"><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn6061_175"><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn6061_176"><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn6061_177"><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn6061_178"><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn6061_179"><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn6061_180"><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn6061_181"><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn6061_182"><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn6061_183"><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn6061_184"><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn6061_185"><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn6061_186"><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn6061_187"><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn6061_188"><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn6061_189"><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn6061_190"><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn6061_191"><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn6061_192"><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn6061_193"><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn6061_194"><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn6061_195"><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn6061_196"><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn6061_197"><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn6061_198"><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn6061_199"><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn6061_200"><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn6061_201"><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn6061_202"><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn6061_203"><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn6061_204"><td id="204"><a href="#204">204</a></td></tr
></table></pre>

<pre><table><tr id="gr_svn6061_205"><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn6061_206"><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn6061_207"><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn6061_208"><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn6061_209"><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn6061_210"><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn6061_211"><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn6061_212"><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn6061_213"><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn6061_214"><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn6061_215"><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn6061_216"><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn6061_217"><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn6061_218"><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn6061_219"><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn6061_220"><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn6061_221"><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn6061_222"><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn6061_223"><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn6061_224"><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn6061_225"><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn6061_226"><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn6061_227"><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn6061_228"><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn6061_229"><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn6061_230"><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn6061_231"><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn6061_232"><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn6061_233"><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn6061_234"><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn6061_235"><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn6061_236"><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn6061_237"><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn6061_238"><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn6061_239"><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn6061_240"><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn6061_241"><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn6061_242"><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn6061_243"><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn6061_244"><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn6061_245"><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn6061_246"><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn6061_247"><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn6061_248"><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn6061_249"><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn6061_250"><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn6061_251"><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn6061_252"><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn6061_253"><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn6061_254"><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn6061_255"><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn6061_256"><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn6061_257"><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn6061_258"><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn6061_259"><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn6061_260"><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn6061_261"><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn6061_262"><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn6061_263"><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn6061_264"><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn6061_265"><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn6061_266"><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn6061_267"><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn6061_268"><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn6061_269"><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn6061_270"><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn6061_271"><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn6061_272"><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn6061_273"><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn6061_274"><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn6061_275"><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn6061_276"><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn6061_277"><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn6061_278"><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn6061_279"><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn6061_280"><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn6061_281"><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn6061_282"><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn6061_283"><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn6061_284"><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn6061_285"><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn6061_286"><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn6061_287"><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn6061_288"><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn6061_289"><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn6061_290"><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn6061_291"><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn6061_292"><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn6061_293"><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn6061_294"><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn6061_295"><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn6061_296"><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn6061_297"><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn6061_298"><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn6061_299"><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn6061_300"><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn6061_301"><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn6061_302"><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn6061_303"><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn6061_304"><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn6061_305"><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn6061_306"><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn6061_307"><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn6061_308"><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn6061_309"><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn6061_310"><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn6061_311"><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn6061_312"><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn6061_313"><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn6061_314"><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn6061_315"><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn6061_316"><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn6061_317"><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn6061_318"><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn6061_319"><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn6061_320"><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn6061_321"><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn6061_322"><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn6061_323"><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn6061_324"><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn6061_325"><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn6061_326"><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn6061_327"><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn6061_328"><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn6061_329"><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn6061_330"><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn6061_331"><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn6061_332"><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn6061_333"><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn6061_334"><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn6061_335"><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn6061_336"><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn6061_337"><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn6061_338"><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn6061_339"><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn6061_340"><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn6061_341"><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn6061_342"><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn6061_343"><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn6061_344"><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn6061_345"><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn6061_346"><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn6061_347"><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn6061_348"><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn6061_349"><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn6061_350"><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn6061_351"><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn6061_352"><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn6061_353"><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn6061_354"><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn6061_355"><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn6061_356"><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn6061_357"><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn6061_358"><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn6061_359"><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn6061_360"><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn6061_361"><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn6061_362"><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn6061_363"><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn6061_364"><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn6061_365"><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn6061_366"><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn6061_367"><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn6061_368"><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn6061_369"><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn6061_370"><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn6061_371"><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn6061_372"><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn6061_373"><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn6061_374"><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn6061_375"><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn6061_376"><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn6061_377"><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn6061_378"><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn6061_379"><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn6061_380"><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn6061_381"><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn6061_382"><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn6061_383"><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn6061_384"><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn6061_385"><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn6061_386"><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn6061_387"><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn6061_388"><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn6061_389"><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn6061_390"><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn6061_391"><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn6061_392"><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn6061_393"><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn6061_394"><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn6061_395"><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn6061_396"><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn6061_397"><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn6061_398"><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn6061_399"><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn6061_400"><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn6061_401"><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn6061_402"><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn6061_403"><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn6061_404"><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn6061_405"><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn6061_406"><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn6061_407"><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn6061_408"><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn6061_409"><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn6061_410"><td id="410"><a href="#410">410</a></td></tr
></table></pre>

<pre><table><tr id="gr_svn6061_411"><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn6061_412"><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn6061_413"><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn6061_414"><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn6061_415"><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn6061_416"><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn6061_417"><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn6061_418"><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn6061_419"><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn6061_420"><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn6061_421"><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn6061_422"><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn6061_423"><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn6061_424"><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn6061_425"><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn6061_426"><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn6061_427"><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn6061_428"><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn6061_429"><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn6061_430"><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn6061_431"><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn6061_432"><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn6061_433"><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn6061_434"><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn6061_435"><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn6061_436"><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn6061_437"><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn6061_438"><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn6061_439"><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn6061_440"><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn6061_441"><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn6061_442"><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn6061_443"><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn6061_444"><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn6061_445"><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn6061_446"><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn6061_447"><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn6061_448"><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn6061_449"><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn6061_450"><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn6061_451"><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn6061_452"><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn6061_453"><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn6061_454"><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn6061_455"><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn6061_456"><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn6061_457"><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn6061_458"><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn6061_459"><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn6061_460"><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn6061_461"><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn6061_462"><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn6061_463"><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn6061_464"><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn6061_465"><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn6061_466"><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn6061_467"><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn6061_468"><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn6061_469"><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn6061_470"><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn6061_471"><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn6061_472"><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn6061_473"><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn6061_474"><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn6061_475"><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn6061_476"><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn6061_477"><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn6061_478"><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn6061_479"><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn6061_480"><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn6061_481"><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn6061_482"><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn6061_483"><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn6061_484"><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn6061_485"><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn6061_486"><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn6061_487"><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn6061_488"><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn6061_489"><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn6061_490"><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn6061_491"><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn6061_492"><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn6061_493"><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn6061_494"><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn6061_495"><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn6061_496"><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn6061_497"><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn6061_498"><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn6061_499"><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn6061_500"><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn6061_501"><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn6061_502"><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn6061_503"><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn6061_504"><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn6061_505"><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn6061_506"><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn6061_507"><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn6061_508"><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn6061_509"><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn6061_510"><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn6061_511"><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn6061_512"><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn6061_513"><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn6061_514"><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn6061_515"><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn6061_516"><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn6061_517"><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn6061_518"><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn6061_519"><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn6061_520"><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn6061_521"><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn6061_522"><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn6061_523"><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn6061_524"><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn6061_525"><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn6061_526"><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn6061_527"><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn6061_528"><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn6061_529"><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn6061_530"><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn6061_531"><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn6061_532"><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn6061_533"><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn6061_534"><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn6061_535"><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn6061_536"><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn6061_537"><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn6061_538"><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn6061_539"><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn6061_540"><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn6061_541"><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn6061_542"><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn6061_543"><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn6061_544"><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn6061_545"><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn6061_546"><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn6061_547"><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn6061_548"><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn6061_549"><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn6061_550"><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn6061_551"><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn6061_552"><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn6061_553"><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn6061_554"><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn6061_555"><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn6061_556"><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn6061_557"><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn6061_558"><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn6061_559"><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn6061_560"><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn6061_561"><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn6061_562"><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn6061_563"><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn6061_564"><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn6061_565"><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn6061_566"><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn6061_567"><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn6061_568"><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn6061_569"><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn6061_570"><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn6061_571"><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn6061_572"><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn6061_573"><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn6061_574"><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn6061_575"><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn6061_576"><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn6061_577"><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn6061_578"><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn6061_579"><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn6061_580"><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn6061_581"><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn6061_582"><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn6061_583"><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn6061_584"><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn6061_585"><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn6061_586"><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn6061_587"><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn6061_588"><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn6061_589"><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn6061_590"><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn6061_591"><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn6061_592"><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn6061_593"><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn6061_594"><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn6061_595"><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn6061_596"><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn6061_597"><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn6061_598"><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn6061_599"><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn6061_600"><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn6061_601"><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn6061_602"><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn6061_603"><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn6061_604"><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn6061_605"><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn6061_606"><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn6061_607"><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn6061_608"><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn6061_609"><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn6061_610"><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn6061_611"><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn6061_612"><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn6061_613"><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn6061_614"><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn6061_615"><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn6061_616"><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn6061_617"><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn6061_618"><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn6061_619"><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn6061_620"><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn6061_621"><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn6061_622"><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn6061_623"><td id="623"><a href="#623">623</a></td></tr
></table></pre>

<pre><table><tr id="gr_svn6061_624"><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn6061_625"><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn6061_626"><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn6061_627"><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn6061_628"><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn6061_629"><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn6061_630"><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn6061_631"><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn6061_632"><td id="632"><a href="#632">632</a></td></tr
></table></pre>

<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>

<pre class="prettyprint lang-js"><table><tr
id=sl_svn6061_1><td class="source">/*<br></td></tr
><tr
id=sl_svn6061_2><td class="source"> * jQuery Form Plugin<br></td></tr
><tr
id=sl_svn6061_3><td class="source"> * version: 2.18 (06-JAN-2009)<br></td></tr
><tr
id=sl_svn6061_4><td class="source"> * @requires jQuery v1.2.2 or later<br></td></tr
><tr
id=sl_svn6061_5><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_6><td class="source"> * Examples and documentation at: http://malsup.com/jquery/form/<br></td></tr
><tr
id=sl_svn6061_7><td class="source"> * Dual licensed under the MIT and GPL licenses:<br></td></tr
><tr
id=sl_svn6061_8><td class="source"> *   http://www.opensource.org/licenses/mit-license.php<br></td></tr
><tr
id=sl_svn6061_9><td class="source"> *   http://www.gnu.org/licenses/gpl.html<br></td></tr
><tr
id=sl_svn6061_10><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_11><td class="source"> * Revision: $Id$<br></td></tr
><tr
id=sl_svn6061_12><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_13><td class="source">;(function($) {<br></td></tr
><tr
id=sl_svn6061_14><td class="source"><br></td></tr
><tr
id=sl_svn6061_15><td class="source">/*<br></td></tr
><tr
id=sl_svn6061_16><td class="source">    Usage Note:  <br></td></tr
><tr
id=sl_svn6061_17><td class="source">    -----------<br></td></tr
><tr
id=sl_svn6061_18><td class="source">    Do not use both ajaxSubmit and ajaxForm on the same form.  These<br></td></tr
><tr
id=sl_svn6061_19><td class="source">    functions are intended to be exclusive.  Use ajaxSubmit if you want<br></td></tr
><tr
id=sl_svn6061_20><td class="source">    to bind your own submit handler to the form.  For example,<br></td></tr
><tr
id=sl_svn6061_21><td class="source"><br></td></tr
><tr
id=sl_svn6061_22><td class="source">    $(document).ready(function() {<br></td></tr
><tr
id=sl_svn6061_23><td class="source">        $(&#39;#myForm&#39;).bind(&#39;submit&#39;, function() {<br></td></tr
><tr
id=sl_svn6061_24><td class="source">            $(this).ajaxSubmit({<br></td></tr
><tr
id=sl_svn6061_25><td class="source">                target: &#39;#output&#39;<br></td></tr
><tr
id=sl_svn6061_26><td class="source">            });<br></td></tr
><tr
id=sl_svn6061_27><td class="source">            return false; // &lt;-- important!<br></td></tr
><tr
id=sl_svn6061_28><td class="source">        });<br></td></tr
><tr
id=sl_svn6061_29><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_30><td class="source"><br></td></tr
><tr
id=sl_svn6061_31><td class="source">    Use ajaxForm when you want the plugin to manage all the event binding<br></td></tr
><tr
id=sl_svn6061_32><td class="source">    for you.  For example,<br></td></tr
><tr
id=sl_svn6061_33><td class="source"><br></td></tr
><tr
id=sl_svn6061_34><td class="source">    $(document).ready(function() {<br></td></tr
><tr
id=sl_svn6061_35><td class="source">        $(&#39;#myForm&#39;).ajaxForm({<br></td></tr
><tr
id=sl_svn6061_36><td class="source">            target: &#39;#output&#39;<br></td></tr
><tr
id=sl_svn6061_37><td class="source">        });<br></td></tr
><tr
id=sl_svn6061_38><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_39><td class="source">        <br></td></tr
><tr
id=sl_svn6061_40><td class="source">    When using ajaxForm, the ajaxSubmit function will be invoked for you<br></td></tr
><tr
id=sl_svn6061_41><td class="source">    at the appropriate time.  <br></td></tr
><tr
id=sl_svn6061_42><td class="source">*/<br></td></tr
><tr
id=sl_svn6061_43><td class="source"><br></td></tr
><tr
id=sl_svn6061_44><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_45><td class="source"> * ajaxSubmit() provides a mechanism for immediately submitting <br></td></tr
><tr
id=sl_svn6061_46><td class="source"> * an HTML form using AJAX.<br></td></tr
><tr
id=sl_svn6061_47><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_48><td class="source">$.fn.ajaxSubmit = function(options) {<br></td></tr
><tr
id=sl_svn6061_49><td class="source">    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)<br></td></tr
><tr
id=sl_svn6061_50><td class="source">    if (!this.length) {<br></td></tr
><tr
id=sl_svn6061_51><td class="source">        log(&#39;ajaxSubmit: skipping submit process - no element selected&#39;);<br></td></tr
><tr
id=sl_svn6061_52><td class="source">        return this;<br></td></tr
><tr
id=sl_svn6061_53><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_54><td class="source"><br></td></tr
><tr
id=sl_svn6061_55><td class="source">    if (typeof options == &#39;function&#39;)<br></td></tr
><tr
id=sl_svn6061_56><td class="source">        options = { success: options };<br></td></tr
><tr
id=sl_svn6061_57><td class="source"><br></td></tr
><tr
id=sl_svn6061_58><td class="source">    options = $.extend({<br></td></tr
><tr
id=sl_svn6061_59><td class="source">        url:  this.attr(&#39;action&#39;) || window.location.toString(),<br></td></tr
><tr
id=sl_svn6061_60><td class="source">        type: this.attr(&#39;method&#39;) || &#39;GET&#39;<br></td></tr
><tr
id=sl_svn6061_61><td class="source">    }, options || {});<br></td></tr
><tr
id=sl_svn6061_62><td class="source"><br></td></tr
><tr
id=sl_svn6061_63><td class="source">    // hook for manipulating the form data before it is extracted;<br></td></tr
><tr
id=sl_svn6061_64><td class="source">    // convenient for use with rich editors like tinyMCE or FCKEditor<br></td></tr
><tr
id=sl_svn6061_65><td class="source">    var veto = {};<br></td></tr
><tr
id=sl_svn6061_66><td class="source">    this.trigger(&#39;form-pre-serialize&#39;, [this, options, veto]);<br></td></tr
><tr
id=sl_svn6061_67><td class="source">    if (veto.veto) {<br></td></tr
><tr
id=sl_svn6061_68><td class="source">        log(&#39;ajaxSubmit: submit vetoed via form-pre-serialize trigger&#39;);<br></td></tr
><tr
id=sl_svn6061_69><td class="source">        return this;<br></td></tr
><tr
id=sl_svn6061_70><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_71><td class="source"><br></td></tr
><tr
id=sl_svn6061_72><td class="source">    // provide opportunity to alter form data before it is serialized<br></td></tr
><tr
id=sl_svn6061_73><td class="source">    if (options.beforeSerialize &amp;&amp; options.beforeSerialize(this, options) === false) {<br></td></tr
><tr
id=sl_svn6061_74><td class="source">        log(&#39;ajaxSubmit: submit aborted via beforeSerialize callback&#39;);<br></td></tr
><tr
id=sl_svn6061_75><td class="source">        return this;<br></td></tr
><tr
id=sl_svn6061_76><td class="source">    }    <br></td></tr
><tr
id=sl_svn6061_77><td class="source">   <br></td></tr
><tr
id=sl_svn6061_78><td class="source">    var a = this.formToArray(options.semantic);<br></td></tr
><tr
id=sl_svn6061_79><td class="source">    if (options.data) {<br></td></tr
><tr
id=sl_svn6061_80><td class="source">        options.extraData = options.data;<br></td></tr
><tr
id=sl_svn6061_81><td class="source">        for (var n in options.data) {<br></td></tr
><tr
id=sl_svn6061_82><td class="source">          if(options.data[n] instanceof Array) {<br></td></tr
><tr
id=sl_svn6061_83><td class="source">            for (var k in options.data[n])<br></td></tr
><tr
id=sl_svn6061_84><td class="source">              a.push( { name: n, value: options.data[n][k] } )<br></td></tr
><tr
id=sl_svn6061_85><td class="source">          }  <br></td></tr
><tr
id=sl_svn6061_86><td class="source">          else<br></td></tr
><tr
id=sl_svn6061_87><td class="source">             a.push( { name: n, value: options.data[n] } );<br></td></tr
><tr
id=sl_svn6061_88><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_89><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_90><td class="source"><br></td></tr
><tr
id=sl_svn6061_91><td class="source">    // give pre-submit callback an opportunity to abort the submit<br></td></tr
><tr
id=sl_svn6061_92><td class="source">    if (options.beforeSubmit &amp;&amp; options.beforeSubmit(a, this, options) === false) {<br></td></tr
><tr
id=sl_svn6061_93><td class="source">        log(&#39;ajaxSubmit: submit aborted via beforeSubmit callback&#39;);<br></td></tr
><tr
id=sl_svn6061_94><td class="source">        return this;<br></td></tr
><tr
id=sl_svn6061_95><td class="source">    }    <br></td></tr
><tr
id=sl_svn6061_96><td class="source"><br></td></tr
><tr
id=sl_svn6061_97><td class="source">    // fire vetoable &#39;validate&#39; event<br></td></tr
><tr
id=sl_svn6061_98><td class="source">    this.trigger(&#39;form-submit-validate&#39;, [a, this, options, veto]);<br></td></tr
><tr
id=sl_svn6061_99><td class="source">    if (veto.veto) {<br></td></tr
><tr
id=sl_svn6061_100><td class="source">        log(&#39;ajaxSubmit: submit vetoed via form-submit-validate trigger&#39;);<br></td></tr
><tr
id=sl_svn6061_101><td class="source">        return this;<br></td></tr
><tr
id=sl_svn6061_102><td class="source">    }    <br></td></tr
><tr
id=sl_svn6061_103><td class="source"><br></td></tr
><tr
id=sl_svn6061_104><td class="source">    var q = $.param(a);<br></td></tr
><tr
id=sl_svn6061_105><td class="source"><br></td></tr
><tr
id=sl_svn6061_106><td class="source">    if (options.type.toUpperCase() == &#39;GET&#39;) {<br></td></tr
><tr
id=sl_svn6061_107><td class="source">        options.url += (options.url.indexOf(&#39;?&#39;) &gt;= 0 ? &#39;&amp;&#39; : &#39;?&#39;) + q;<br></td></tr
><tr
id=sl_svn6061_108><td class="source">        options.data = null;  // data is null for &#39;get&#39;<br></td></tr
><tr
id=sl_svn6061_109><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_110><td class="source">    else<br></td></tr
><tr
id=sl_svn6061_111><td class="source">        options.data = q; // data is the query string for &#39;post&#39;<br></td></tr
><tr
id=sl_svn6061_112><td class="source"><br></td></tr
><tr
id=sl_svn6061_113><td class="source">    var $form = this, callbacks = [];<br></td></tr
><tr
id=sl_svn6061_114><td class="source">    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });<br></td></tr
><tr
id=sl_svn6061_115><td class="source">    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });<br></td></tr
><tr
id=sl_svn6061_116><td class="source"><br></td></tr
><tr
id=sl_svn6061_117><td class="source">    // perform a load on the target only if dataType is not provided<br></td></tr
><tr
id=sl_svn6061_118><td class="source">    if (!options.dataType &amp;&amp; options.target) {<br></td></tr
><tr
id=sl_svn6061_119><td class="source">        var oldSuccess = options.success || function(){};<br></td></tr
><tr
id=sl_svn6061_120><td class="source">        callbacks.push(function(data) {<br></td></tr
><tr
id=sl_svn6061_121><td class="source">            $(options.target).html(data).each(oldSuccess, arguments);<br></td></tr
><tr
id=sl_svn6061_122><td class="source">        });<br></td></tr
><tr
id=sl_svn6061_123><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_124><td class="source">    else if (options.success)<br></td></tr
><tr
id=sl_svn6061_125><td class="source">        callbacks.push(options.success);<br></td></tr
><tr
id=sl_svn6061_126><td class="source"><br></td></tr
><tr
id=sl_svn6061_127><td class="source">    options.success = function(data, status) {<br></td></tr
><tr
id=sl_svn6061_128><td class="source">        for (var i=0, max=callbacks.length; i &lt; max; i++)<br></td></tr
><tr
id=sl_svn6061_129><td class="source">            callbacks[i].apply(options, [data, status, $form]);<br></td></tr
><tr
id=sl_svn6061_130><td class="source">    };<br></td></tr
><tr
id=sl_svn6061_131><td class="source"><br></td></tr
><tr
id=sl_svn6061_132><td class="source">    // are there files to upload?<br></td></tr
><tr
id=sl_svn6061_133><td class="source">    var files = $(&#39;input:file&#39;, this).fieldValue();<br></td></tr
><tr
id=sl_svn6061_134><td class="source">    var found = false;<br></td></tr
><tr
id=sl_svn6061_135><td class="source">    for (var j=0; j &lt; files.length; j++)<br></td></tr
><tr
id=sl_svn6061_136><td class="source">        if (files[j])<br></td></tr
><tr
id=sl_svn6061_137><td class="source">            found = true;<br></td></tr
><tr
id=sl_svn6061_138><td class="source"><br></td></tr
><tr
id=sl_svn6061_139><td class="source">    // options.iframe allows user to force iframe mode<br></td></tr
><tr
id=sl_svn6061_140><td class="source">   if (options.iframe || found) { <br></td></tr
><tr
id=sl_svn6061_141><td class="source">       // hack to fix Safari hang (thanks to Tim Molendijk for this)<br></td></tr
><tr
id=sl_svn6061_142><td class="source">       // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d<br></td></tr
><tr
id=sl_svn6061_143><td class="source">       if ($.browser.safari &amp;&amp; options.closeKeepAlive)<br></td></tr
><tr
id=sl_svn6061_144><td class="source">           $.get(options.closeKeepAlive, fileUpload);<br></td></tr
><tr
id=sl_svn6061_145><td class="source">       else<br></td></tr
><tr
id=sl_svn6061_146><td class="source">           fileUpload();<br></td></tr
><tr
id=sl_svn6061_147><td class="source">       }<br></td></tr
><tr
id=sl_svn6061_148><td class="source">   else<br></td></tr
><tr
id=sl_svn6061_149><td class="source">       $.ajax(options);<br></td></tr
><tr
id=sl_svn6061_150><td class="source"><br></td></tr
><tr
id=sl_svn6061_151><td class="source">    // fire &#39;notify&#39; event<br></td></tr
><tr
id=sl_svn6061_152><td class="source">    this.trigger(&#39;form-submit-notify&#39;, [this, options]);<br></td></tr
><tr
id=sl_svn6061_153><td class="source">    return this;<br></td></tr
><tr
id=sl_svn6061_154><td class="source"><br></td></tr
><tr
id=sl_svn6061_155><td class="source"><br></td></tr
><tr
id=sl_svn6061_156><td class="source">    // private function for handling file uploads (hat tip to YAHOO!)<br></td></tr
><tr
id=sl_svn6061_157><td class="source">    function fileUpload() {<br></td></tr
><tr
id=sl_svn6061_158><td class="source">        var form = $form[0];<br></td></tr
><tr
id=sl_svn6061_159><td class="source">        <br></td></tr
><tr
id=sl_svn6061_160><td class="source">        if ($(&#39;:input[name=submit]&#39;, form).length) {<br></td></tr
><tr
id=sl_svn6061_161><td class="source">            alert(&#39;Error: Form elements must not be named &quot;submit&quot;.&#39;);<br></td></tr
><tr
id=sl_svn6061_162><td class="source">            return;<br></td></tr
><tr
id=sl_svn6061_163><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_164><td class="source">        <br></td></tr
><tr
id=sl_svn6061_165><td class="source">        var opts = $.extend({}, $.ajaxSettings, options);<br></td></tr
><tr
id=sl_svn6061_166><td class="source">		var s = jQuery.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);<br></td></tr
><tr
id=sl_svn6061_167><td class="source"><br></td></tr
><tr
id=sl_svn6061_168><td class="source">        var id = &#39;jqFormIO&#39; + (new Date().getTime());<br></td></tr
><tr
id=sl_svn6061_169><td class="source">        var $io = $(&#39;&lt;iframe id=&quot;&#39; + id + &#39;&quot; name=&quot;&#39; + id + &#39;&quot; /&gt;&#39;);<br></td></tr
><tr
id=sl_svn6061_170><td class="source">        var io = $io[0];<br></td></tr
><tr
id=sl_svn6061_171><td class="source"><br></td></tr
><tr
id=sl_svn6061_172><td class="source">        if ($.browser.msie || $.browser.opera) <br></td></tr
><tr
id=sl_svn6061_173><td class="source">            io.src = &#39;javascript:false;document.write(&quot;&quot;);&#39;;<br></td></tr
><tr
id=sl_svn6061_174><td class="source">        $io.css({ position: &#39;absolute&#39;, top: &#39;-1000px&#39;, left: &#39;-1000px&#39; });<br></td></tr
><tr
id=sl_svn6061_175><td class="source"><br></td></tr
><tr
id=sl_svn6061_176><td class="source">        var xhr = { // mock object<br></td></tr
><tr
id=sl_svn6061_177><td class="source">            aborted: 0,<br></td></tr
><tr
id=sl_svn6061_178><td class="source">            responseText: null,<br></td></tr
><tr
id=sl_svn6061_179><td class="source">            responseXML: null,<br></td></tr
><tr
id=sl_svn6061_180><td class="source">            status: 0,<br></td></tr
><tr
id=sl_svn6061_181><td class="source">            statusText: &#39;n/a&#39;,<br></td></tr
><tr
id=sl_svn6061_182><td class="source">            getAllResponseHeaders: function() {},<br></td></tr
><tr
id=sl_svn6061_183><td class="source">            getResponseHeader: function() {},<br></td></tr
><tr
id=sl_svn6061_184><td class="source">            setRequestHeader: function() {},<br></td></tr
><tr
id=sl_svn6061_185><td class="source">            abort: function() { <br></td></tr
><tr
id=sl_svn6061_186><td class="source">                this.aborted = 1; <br></td></tr
><tr
id=sl_svn6061_187><td class="source">                $io.attr(&#39;src&#39;,&#39;about:blank&#39;); // abort op in progress<br></td></tr
><tr
id=sl_svn6061_188><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_189><td class="source">        };<br></td></tr
><tr
id=sl_svn6061_190><td class="source"><br></td></tr
><tr
id=sl_svn6061_191><td class="source">        var g = opts.global;<br></td></tr
><tr
id=sl_svn6061_192><td class="source">        // trigger ajax global events so that activity/block indicators work like normal<br></td></tr
><tr
id=sl_svn6061_193><td class="source">        if (g &amp;&amp; ! $.active++) $.event.trigger(&quot;ajaxStart&quot;);<br></td></tr
><tr
id=sl_svn6061_194><td class="source">        if (g) $.event.trigger(&quot;ajaxSend&quot;, [xhr, opts]);<br></td></tr
><tr
id=sl_svn6061_195><td class="source"><br></td></tr
><tr
id=sl_svn6061_196><td class="source">		if (s.beforeSend &amp;&amp; s.beforeSend(xhr, s) === false) {<br></td></tr
><tr
id=sl_svn6061_197><td class="source">			s.global &amp;&amp; jQuery.active--;<br></td></tr
><tr
id=sl_svn6061_198><td class="source">			return;<br></td></tr
><tr
id=sl_svn6061_199><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_200><td class="source">        if (xhr.aborted)<br></td></tr
><tr
id=sl_svn6061_201><td class="source">            return;<br></td></tr
><tr
id=sl_svn6061_202><td class="source">        <br></td></tr
><tr
id=sl_svn6061_203><td class="source">        var cbInvoked = 0;<br></td></tr
><tr
id=sl_svn6061_204><td class="source">        var timedOut = 0;<br></td></tr
></table></pre>

<pre class="prettyprint lang-js"><table><tr
id=sl_svn6061_205><td class="source"><br></td></tr
><tr
id=sl_svn6061_206><td class="source">        // add submitting element to data if we know it<br></td></tr
><tr
id=sl_svn6061_207><td class="source">        var sub = form.clk;<br></td></tr
><tr
id=sl_svn6061_208><td class="source">        if (sub) {<br></td></tr
><tr
id=sl_svn6061_209><td class="source">            var n = sub.name;<br></td></tr
><tr
id=sl_svn6061_210><td class="source">            if (n &amp;&amp; !sub.disabled) {<br></td></tr
><tr
id=sl_svn6061_211><td class="source">                options.extraData = options.extraData || {};<br></td></tr
><tr
id=sl_svn6061_212><td class="source">                options.extraData[n] = sub.value;<br></td></tr
><tr
id=sl_svn6061_213><td class="source">                if (sub.type == &quot;image&quot;) {<br></td></tr
><tr
id=sl_svn6061_214><td class="source">                    options.extraData[name+&#39;.x&#39;] = form.clk_x;<br></td></tr
><tr
id=sl_svn6061_215><td class="source">                    options.extraData[name+&#39;.y&#39;] = form.clk_y;<br></td></tr
><tr
id=sl_svn6061_216><td class="source">                }<br></td></tr
><tr
id=sl_svn6061_217><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_218><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_219><td class="source"><br></td></tr
><tr
id=sl_svn6061_220><td class="source">        // take a breath so that pending repaints get some cpu time before the upload starts<br></td></tr
><tr
id=sl_svn6061_221><td class="source">        setTimeout(function() {<br></td></tr
><tr
id=sl_svn6061_222><td class="source">            // make sure form attrs are set<br></td></tr
><tr
id=sl_svn6061_223><td class="source">            var t = $form.attr(&#39;target&#39;), a = $form.attr(&#39;action&#39;);<br></td></tr
><tr
id=sl_svn6061_224><td class="source">            $form.attr({<br></td></tr
><tr
id=sl_svn6061_225><td class="source">                target:   id,<br></td></tr
><tr
id=sl_svn6061_226><td class="source">                method:   &#39;POST&#39;,<br></td></tr
><tr
id=sl_svn6061_227><td class="source">                action:   opts.url<br></td></tr
><tr
id=sl_svn6061_228><td class="source">            });<br></td></tr
><tr
id=sl_svn6061_229><td class="source">            <br></td></tr
><tr
id=sl_svn6061_230><td class="source">            // ie borks in some cases when setting encoding<br></td></tr
><tr
id=sl_svn6061_231><td class="source">            if (! options.skipEncodingOverride) {<br></td></tr
><tr
id=sl_svn6061_232><td class="source">                $form.attr({<br></td></tr
><tr
id=sl_svn6061_233><td class="source">                    encoding: &#39;multipart/form-data&#39;,<br></td></tr
><tr
id=sl_svn6061_234><td class="source">                    enctype:  &#39;multipart/form-data&#39;<br></td></tr
><tr
id=sl_svn6061_235><td class="source">                });<br></td></tr
><tr
id=sl_svn6061_236><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_237><td class="source"><br></td></tr
><tr
id=sl_svn6061_238><td class="source">            // support timout<br></td></tr
><tr
id=sl_svn6061_239><td class="source">            if (opts.timeout)<br></td></tr
><tr
id=sl_svn6061_240><td class="source">                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);<br></td></tr
><tr
id=sl_svn6061_241><td class="source"><br></td></tr
><tr
id=sl_svn6061_242><td class="source">            // add &quot;extra&quot; data to form if provided in options<br></td></tr
><tr
id=sl_svn6061_243><td class="source">            var extraInputs = [];<br></td></tr
><tr
id=sl_svn6061_244><td class="source">            try {<br></td></tr
><tr
id=sl_svn6061_245><td class="source">                if (options.extraData)<br></td></tr
><tr
id=sl_svn6061_246><td class="source">                    for (var n in options.extraData)<br></td></tr
><tr
id=sl_svn6061_247><td class="source">                        extraInputs.push(<br></td></tr
><tr
id=sl_svn6061_248><td class="source">                            $(&#39;&lt;input type=&quot;hidden&quot; name=&quot;&#39;+n+&#39;&quot; value=&quot;&#39;+options.extraData[n]+&#39;&quot; /&gt;&#39;)<br></td></tr
><tr
id=sl_svn6061_249><td class="source">                                .appendTo(form)[0]);<br></td></tr
><tr
id=sl_svn6061_250><td class="source">            <br></td></tr
><tr
id=sl_svn6061_251><td class="source">                // add iframe to doc and submit the form<br></td></tr
><tr
id=sl_svn6061_252><td class="source">                $io.appendTo(&#39;body&#39;);<br></td></tr
><tr
id=sl_svn6061_253><td class="source">                io.attachEvent ? io.attachEvent(&#39;onload&#39;, cb) : io.addEventListener(&#39;load&#39;, cb, false);<br></td></tr
><tr
id=sl_svn6061_254><td class="source">                form.submit();<br></td></tr
><tr
id=sl_svn6061_255><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_256><td class="source">            finally {<br></td></tr
><tr
id=sl_svn6061_257><td class="source">                // reset attrs and remove &quot;extra&quot; input elements<br></td></tr
><tr
id=sl_svn6061_258><td class="source">                $form.attr(&#39;action&#39;, a);<br></td></tr
><tr
id=sl_svn6061_259><td class="source">                t ? $form.attr(&#39;target&#39;, t) : $form.removeAttr(&#39;target&#39;);<br></td></tr
><tr
id=sl_svn6061_260><td class="source">                $(extraInputs).remove();<br></td></tr
><tr
id=sl_svn6061_261><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_262><td class="source">        }, 10);<br></td></tr
><tr
id=sl_svn6061_263><td class="source"><br></td></tr
><tr
id=sl_svn6061_264><td class="source">        function cb() {<br></td></tr
><tr
id=sl_svn6061_265><td class="source">            if (cbInvoked++) return;<br></td></tr
><tr
id=sl_svn6061_266><td class="source">            <br></td></tr
><tr
id=sl_svn6061_267><td class="source">            io.detachEvent ? io.detachEvent(&#39;onload&#39;, cb) : io.removeEventListener(&#39;load&#39;, cb, false);<br></td></tr
><tr
id=sl_svn6061_268><td class="source"><br></td></tr
><tr
id=sl_svn6061_269><td class="source">            var operaHack = 0;<br></td></tr
><tr
id=sl_svn6061_270><td class="source">            var ok = true;<br></td></tr
><tr
id=sl_svn6061_271><td class="source">            try {<br></td></tr
><tr
id=sl_svn6061_272><td class="source">                if (timedOut) throw &#39;timeout&#39;;<br></td></tr
><tr
id=sl_svn6061_273><td class="source">                // extract the server response from the iframe<br></td></tr
><tr
id=sl_svn6061_274><td class="source">                var data, doc;<br></td></tr
><tr
id=sl_svn6061_275><td class="source"><br></td></tr
><tr
id=sl_svn6061_276><td class="source">                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;<br></td></tr
><tr
id=sl_svn6061_277><td class="source">                <br></td></tr
><tr
id=sl_svn6061_278><td class="source">                if (doc.body == null &amp;&amp; !operaHack &amp;&amp; $.browser.opera) {<br></td></tr
><tr
id=sl_svn6061_279><td class="source">                    // In Opera 9.2.x the iframe DOM is not always traversable when<br></td></tr
><tr
id=sl_svn6061_280><td class="source">                    // the onload callback fires so we give Opera 100ms to right itself<br></td></tr
><tr
id=sl_svn6061_281><td class="source">                    operaHack = 1;<br></td></tr
><tr
id=sl_svn6061_282><td class="source">                    cbInvoked--;<br></td></tr
><tr
id=sl_svn6061_283><td class="source">                    setTimeout(cb, 100);<br></td></tr
><tr
id=sl_svn6061_284><td class="source">                    return;<br></td></tr
><tr
id=sl_svn6061_285><td class="source">                }<br></td></tr
><tr
id=sl_svn6061_286><td class="source">                <br></td></tr
><tr
id=sl_svn6061_287><td class="source">                xhr.responseText = doc.body ? doc.body.innerHTML : null;<br></td></tr
><tr
id=sl_svn6061_288><td class="source">                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;<br></td></tr
><tr
id=sl_svn6061_289><td class="source">                xhr.getResponseHeader = function(header){<br></td></tr
><tr
id=sl_svn6061_290><td class="source">                    var headers = {&#39;content-type&#39;: opts.dataType};<br></td></tr
><tr
id=sl_svn6061_291><td class="source">                    return headers[header];<br></td></tr
><tr
id=sl_svn6061_292><td class="source">                };<br></td></tr
><tr
id=sl_svn6061_293><td class="source"><br></td></tr
><tr
id=sl_svn6061_294><td class="source">                if (opts.dataType == &#39;json&#39; || opts.dataType == &#39;script&#39;) {<br></td></tr
><tr
id=sl_svn6061_295><td class="source">                    var ta = doc.getElementsByTagName(&#39;textarea&#39;)[0];<br></td></tr
><tr
id=sl_svn6061_296><td class="source">                    xhr.responseText = ta ? ta.value : xhr.responseText;<br></td></tr
><tr
id=sl_svn6061_297><td class="source">                }<br></td></tr
><tr
id=sl_svn6061_298><td class="source">                else if (opts.dataType == &#39;xml&#39; &amp;&amp; !xhr.responseXML &amp;&amp; xhr.responseText != null) {<br></td></tr
><tr
id=sl_svn6061_299><td class="source">                    xhr.responseXML = toXml(xhr.responseText);<br></td></tr
><tr
id=sl_svn6061_300><td class="source">                }<br></td></tr
><tr
id=sl_svn6061_301><td class="source">                data = $.httpData(xhr, opts.dataType);<br></td></tr
><tr
id=sl_svn6061_302><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_303><td class="source">            catch(e){<br></td></tr
><tr
id=sl_svn6061_304><td class="source">                ok = false;<br></td></tr
><tr
id=sl_svn6061_305><td class="source">                $.handleError(opts, xhr, &#39;error&#39;, e);<br></td></tr
><tr
id=sl_svn6061_306><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_307><td class="source"><br></td></tr
><tr
id=sl_svn6061_308><td class="source">            // ordering of these callbacks/triggers is odd, but that&#39;s how $.ajax does it<br></td></tr
><tr
id=sl_svn6061_309><td class="source">            if (ok) {<br></td></tr
><tr
id=sl_svn6061_310><td class="source">                opts.success(data, &#39;success&#39;);<br></td></tr
><tr
id=sl_svn6061_311><td class="source">                if (g) $.event.trigger(&quot;ajaxSuccess&quot;, [xhr, opts]);<br></td></tr
><tr
id=sl_svn6061_312><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_313><td class="source">            if (g) $.event.trigger(&quot;ajaxComplete&quot;, [xhr, opts]);<br></td></tr
><tr
id=sl_svn6061_314><td class="source">            if (g &amp;&amp; ! --$.active) $.event.trigger(&quot;ajaxStop&quot;);<br></td></tr
><tr
id=sl_svn6061_315><td class="source">            if (opts.complete) opts.complete(xhr, ok ? &#39;success&#39; : &#39;error&#39;);<br></td></tr
><tr
id=sl_svn6061_316><td class="source"><br></td></tr
><tr
id=sl_svn6061_317><td class="source">            // clean up<br></td></tr
><tr
id=sl_svn6061_318><td class="source">            setTimeout(function() {<br></td></tr
><tr
id=sl_svn6061_319><td class="source">                $io.remove();<br></td></tr
><tr
id=sl_svn6061_320><td class="source">                xhr.responseXML = null;<br></td></tr
><tr
id=sl_svn6061_321><td class="source">            }, 100);<br></td></tr
><tr
id=sl_svn6061_322><td class="source">        };<br></td></tr
><tr
id=sl_svn6061_323><td class="source"><br></td></tr
><tr
id=sl_svn6061_324><td class="source">        function toXml(s, doc) {<br></td></tr
><tr
id=sl_svn6061_325><td class="source">            if (window.ActiveXObject) {<br></td></tr
><tr
id=sl_svn6061_326><td class="source">                doc = new ActiveXObject(&#39;Microsoft.XMLDOM&#39;);<br></td></tr
><tr
id=sl_svn6061_327><td class="source">                doc.async = &#39;false&#39;;<br></td></tr
><tr
id=sl_svn6061_328><td class="source">                doc.loadXML(s);<br></td></tr
><tr
id=sl_svn6061_329><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_330><td class="source">            else<br></td></tr
><tr
id=sl_svn6061_331><td class="source">                doc = (new DOMParser()).parseFromString(s, &#39;text/xml&#39;);<br></td></tr
><tr
id=sl_svn6061_332><td class="source">            return (doc &amp;&amp; doc.documentElement &amp;&amp; doc.documentElement.tagName != &#39;parsererror&#39;) ? doc : null;<br></td></tr
><tr
id=sl_svn6061_333><td class="source">        };<br></td></tr
><tr
id=sl_svn6061_334><td class="source">    };<br></td></tr
><tr
id=sl_svn6061_335><td class="source">};<br></td></tr
><tr
id=sl_svn6061_336><td class="source"><br></td></tr
><tr
id=sl_svn6061_337><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_338><td class="source"> * ajaxForm() provides a mechanism for fully automating form submission.<br></td></tr
><tr
id=sl_svn6061_339><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_340><td class="source"> * The advantages of using this method instead of ajaxSubmit() are:<br></td></tr
><tr
id=sl_svn6061_341><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_342><td class="source"> * 1: This method will include coordinates for &lt;input type=&quot;image&quot; /&gt; elements (if the element<br></td></tr
><tr
id=sl_svn6061_343><td class="source"> *    is used to submit the form).<br></td></tr
><tr
id=sl_svn6061_344><td class="source"> * 2. This method will include the submit element&#39;s name/value data (for the element that was<br></td></tr
><tr
id=sl_svn6061_345><td class="source"> *    used to submit the form).<br></td></tr
><tr
id=sl_svn6061_346><td class="source"> * 3. This method binds the submit() method to the form for you.<br></td></tr
><tr
id=sl_svn6061_347><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_348><td class="source"> * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely<br></td></tr
><tr
id=sl_svn6061_349><td class="source"> * passes the options argument along after properly binding events for submit elements and<br></td></tr
><tr
id=sl_svn6061_350><td class="source"> * the form itself.<br></td></tr
><tr
id=sl_svn6061_351><td class="source"> */ <br></td></tr
><tr
id=sl_svn6061_352><td class="source">$.fn.ajaxForm = function(options) {<br></td></tr
><tr
id=sl_svn6061_353><td class="source">    return this.ajaxFormUnbind().bind(&#39;submit.form-plugin&#39;,function() {<br></td></tr
><tr
id=sl_svn6061_354><td class="source">        $(this).ajaxSubmit(options);<br></td></tr
><tr
id=sl_svn6061_355><td class="source">        return false;<br></td></tr
><tr
id=sl_svn6061_356><td class="source">    }).each(function() {<br></td></tr
><tr
id=sl_svn6061_357><td class="source">        // store options in hash<br></td></tr
><tr
id=sl_svn6061_358><td class="source">        $(&quot;:submit,input:image&quot;, this).bind(&#39;click.form-plugin&#39;,function(e) {<br></td></tr
><tr
id=sl_svn6061_359><td class="source">            var form = this.form;<br></td></tr
><tr
id=sl_svn6061_360><td class="source">            form.clk = this;<br></td></tr
><tr
id=sl_svn6061_361><td class="source">            if (this.type == &#39;image&#39;) {<br></td></tr
><tr
id=sl_svn6061_362><td class="source">                if (e.offsetX != undefined) {<br></td></tr
><tr
id=sl_svn6061_363><td class="source">                    form.clk_x = e.offsetX;<br></td></tr
><tr
id=sl_svn6061_364><td class="source">                    form.clk_y = e.offsetY;<br></td></tr
><tr
id=sl_svn6061_365><td class="source">                } else if (typeof $.fn.offset == &#39;function&#39;) { // try to use dimensions plugin<br></td></tr
><tr
id=sl_svn6061_366><td class="source">                    var offset = $(this).offset();<br></td></tr
><tr
id=sl_svn6061_367><td class="source">                    form.clk_x = e.pageX - offset.left;<br></td></tr
><tr
id=sl_svn6061_368><td class="source">                    form.clk_y = e.pageY - offset.top;<br></td></tr
><tr
id=sl_svn6061_369><td class="source">                } else {<br></td></tr
><tr
id=sl_svn6061_370><td class="source">                    form.clk_x = e.pageX - this.offsetLeft;<br></td></tr
><tr
id=sl_svn6061_371><td class="source">                    form.clk_y = e.pageY - this.offsetTop;<br></td></tr
><tr
id=sl_svn6061_372><td class="source">                }<br></td></tr
><tr
id=sl_svn6061_373><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_374><td class="source">            // clear form vars<br></td></tr
><tr
id=sl_svn6061_375><td class="source">            setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 10);<br></td></tr
><tr
id=sl_svn6061_376><td class="source">        });<br></td></tr
><tr
id=sl_svn6061_377><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_378><td class="source">};<br></td></tr
><tr
id=sl_svn6061_379><td class="source"><br></td></tr
><tr
id=sl_svn6061_380><td class="source">// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm<br></td></tr
><tr
id=sl_svn6061_381><td class="source">$.fn.ajaxFormUnbind = function() {<br></td></tr
><tr
id=sl_svn6061_382><td class="source">    this.unbind(&#39;submit.form-plugin&#39;);<br></td></tr
><tr
id=sl_svn6061_383><td class="source">    return this.each(function() {<br></td></tr
><tr
id=sl_svn6061_384><td class="source">        $(&quot;:submit,input:image&quot;, this).unbind(&#39;click.form-plugin&#39;);<br></td></tr
><tr
id=sl_svn6061_385><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_386><td class="source"><br></td></tr
><tr
id=sl_svn6061_387><td class="source">};<br></td></tr
><tr
id=sl_svn6061_388><td class="source"><br></td></tr
><tr
id=sl_svn6061_389><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_390><td class="source"> * formToArray() gathers form element data into an array of objects that can<br></td></tr
><tr
id=sl_svn6061_391><td class="source"> * be passed to any of the following ajax functions: $.get, $.post, or load.<br></td></tr
><tr
id=sl_svn6061_392><td class="source"> * Each object in the array has both a &#39;name&#39; and &#39;value&#39; property.  An example of<br></td></tr
><tr
id=sl_svn6061_393><td class="source"> * an array for a simple login form might be:<br></td></tr
><tr
id=sl_svn6061_394><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_395><td class="source"> * [ { name: &#39;username&#39;, value: &#39;jresig&#39; }, { name: &#39;password&#39;, value: &#39;secret&#39; } ]<br></td></tr
><tr
id=sl_svn6061_396><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_397><td class="source"> * It is this array that is passed to pre-submit callback functions provided to the<br></td></tr
><tr
id=sl_svn6061_398><td class="source"> * ajaxSubmit() and ajaxForm() methods.<br></td></tr
><tr
id=sl_svn6061_399><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_400><td class="source">$.fn.formToArray = function(semantic) {<br></td></tr
><tr
id=sl_svn6061_401><td class="source">    var a = [];<br></td></tr
><tr
id=sl_svn6061_402><td class="source">    if (this.length == 0) return a;<br></td></tr
><tr
id=sl_svn6061_403><td class="source"><br></td></tr
><tr
id=sl_svn6061_404><td class="source">    var form = this[0];<br></td></tr
><tr
id=sl_svn6061_405><td class="source">    var els = semantic ? form.getElementsByTagName(&#39;*&#39;) : form.elements;<br></td></tr
><tr
id=sl_svn6061_406><td class="source">    if (!els) return a;<br></td></tr
><tr
id=sl_svn6061_407><td class="source">    for(var i=0, max=els.length; i &lt; max; i++) {<br></td></tr
><tr
id=sl_svn6061_408><td class="source">        var el = els[i];<br></td></tr
><tr
id=sl_svn6061_409><td class="source">        var n = el.name;<br></td></tr
><tr
id=sl_svn6061_410><td class="source">        if (!n) continue;<br></td></tr
></table></pre>

<pre class="prettyprint lang-js"><table><tr
id=sl_svn6061_411><td class="source"><br></td></tr
><tr
id=sl_svn6061_412><td class="source">        if (semantic &amp;&amp; form.clk &amp;&amp; el.type == &quot;image&quot;) {<br></td></tr
><tr
id=sl_svn6061_413><td class="source">            // handle image inputs on the fly when semantic == true<br></td></tr
><tr
id=sl_svn6061_414><td class="source">            if(!el.disabled &amp;&amp; form.clk == el)<br></td></tr
><tr
id=sl_svn6061_415><td class="source">                a.push({name: n+&#39;.x&#39;, value: form.clk_x}, {name: n+&#39;.y&#39;, value: form.clk_y});<br></td></tr
><tr
id=sl_svn6061_416><td class="source">            continue;<br></td></tr
><tr
id=sl_svn6061_417><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_418><td class="source"><br></td></tr
><tr
id=sl_svn6061_419><td class="source">        var v = $.fieldValue(el, true);<br></td></tr
><tr
id=sl_svn6061_420><td class="source">        if (v &amp;&amp; v.constructor == Array) {<br></td></tr
><tr
id=sl_svn6061_421><td class="source">            for(var j=0, jmax=v.length; j &lt; jmax; j++)<br></td></tr
><tr
id=sl_svn6061_422><td class="source">                a.push({name: n, value: v[j]});<br></td></tr
><tr
id=sl_svn6061_423><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_424><td class="source">        else if (v !== null &amp;&amp; typeof v != &#39;undefined&#39;)<br></td></tr
><tr
id=sl_svn6061_425><td class="source">            a.push({name: n, value: v});<br></td></tr
><tr
id=sl_svn6061_426><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_427><td class="source"><br></td></tr
><tr
id=sl_svn6061_428><td class="source">    if (!semantic &amp;&amp; form.clk) {<br></td></tr
><tr
id=sl_svn6061_429><td class="source">        // input type==&#39;image&#39; are not found in elements array! handle them here<br></td></tr
><tr
id=sl_svn6061_430><td class="source">        var inputs = form.getElementsByTagName(&quot;input&quot;);<br></td></tr
><tr
id=sl_svn6061_431><td class="source">        for(var i=0, max=inputs.length; i &lt; max; i++) {<br></td></tr
><tr
id=sl_svn6061_432><td class="source">            var input = inputs[i];<br></td></tr
><tr
id=sl_svn6061_433><td class="source">            var n = input.name;<br></td></tr
><tr
id=sl_svn6061_434><td class="source">            if(n &amp;&amp; !input.disabled &amp;&amp; input.type == &quot;image&quot; &amp;&amp; form.clk == input)<br></td></tr
><tr
id=sl_svn6061_435><td class="source">                a.push({name: n+&#39;.x&#39;, value: form.clk_x}, {name: n+&#39;.y&#39;, value: form.clk_y});<br></td></tr
><tr
id=sl_svn6061_436><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_437><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_438><td class="source">    return a;<br></td></tr
><tr
id=sl_svn6061_439><td class="source">};<br></td></tr
><tr
id=sl_svn6061_440><td class="source"><br></td></tr
><tr
id=sl_svn6061_441><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_442><td class="source"> * Serializes form data into a &#39;submittable&#39; string. This method will return a string<br></td></tr
><tr
id=sl_svn6061_443><td class="source"> * in the format: name1=value1&amp;amp;name2=value2<br></td></tr
><tr
id=sl_svn6061_444><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_445><td class="source">$.fn.formSerialize = function(semantic) {<br></td></tr
><tr
id=sl_svn6061_446><td class="source">    //hand off to jQuery.param for proper encoding<br></td></tr
><tr
id=sl_svn6061_447><td class="source">    return $.param(this.formToArray(semantic));<br></td></tr
><tr
id=sl_svn6061_448><td class="source">};<br></td></tr
><tr
id=sl_svn6061_449><td class="source"><br></td></tr
><tr
id=sl_svn6061_450><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_451><td class="source"> * Serializes all field elements in the jQuery object into a query string.<br></td></tr
><tr
id=sl_svn6061_452><td class="source"> * This method will return a string in the format: name1=value1&amp;amp;name2=value2<br></td></tr
><tr
id=sl_svn6061_453><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_454><td class="source">$.fn.fieldSerialize = function(successful) {<br></td></tr
><tr
id=sl_svn6061_455><td class="source">    var a = [];<br></td></tr
><tr
id=sl_svn6061_456><td class="source">    this.each(function() {<br></td></tr
><tr
id=sl_svn6061_457><td class="source">        var n = this.name;<br></td></tr
><tr
id=sl_svn6061_458><td class="source">        if (!n) return;<br></td></tr
><tr
id=sl_svn6061_459><td class="source">        var v = $.fieldValue(this, successful);<br></td></tr
><tr
id=sl_svn6061_460><td class="source">        if (v &amp;&amp; v.constructor == Array) {<br></td></tr
><tr
id=sl_svn6061_461><td class="source">            for (var i=0,max=v.length; i &lt; max; i++)<br></td></tr
><tr
id=sl_svn6061_462><td class="source">                a.push({name: n, value: v[i]});<br></td></tr
><tr
id=sl_svn6061_463><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_464><td class="source">        else if (v !== null &amp;&amp; typeof v != &#39;undefined&#39;)<br></td></tr
><tr
id=sl_svn6061_465><td class="source">            a.push({name: this.name, value: v});<br></td></tr
><tr
id=sl_svn6061_466><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_467><td class="source">    //hand off to jQuery.param for proper encoding<br></td></tr
><tr
id=sl_svn6061_468><td class="source">    return $.param(a);<br></td></tr
><tr
id=sl_svn6061_469><td class="source">};<br></td></tr
><tr
id=sl_svn6061_470><td class="source"><br></td></tr
><tr
id=sl_svn6061_471><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_472><td class="source"> * Returns the value(s) of the element in the matched set.  For example, consider the following form:<br></td></tr
><tr
id=sl_svn6061_473><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_474><td class="source"> *  &lt;form&gt;&lt;fieldset&gt;<br></td></tr
><tr
id=sl_svn6061_475><td class="source"> *      &lt;input name=&quot;A&quot; type=&quot;text&quot; /&gt;<br></td></tr
><tr
id=sl_svn6061_476><td class="source"> *      &lt;input name=&quot;A&quot; type=&quot;text&quot; /&gt;<br></td></tr
><tr
id=sl_svn6061_477><td class="source"> *      &lt;input name=&quot;B&quot; type=&quot;checkbox&quot; value=&quot;B1&quot; /&gt;<br></td></tr
><tr
id=sl_svn6061_478><td class="source"> *      &lt;input name=&quot;B&quot; type=&quot;checkbox&quot; value=&quot;B2&quot;/&gt;<br></td></tr
><tr
id=sl_svn6061_479><td class="source"> *      &lt;input name=&quot;C&quot; type=&quot;radio&quot; value=&quot;C1&quot; /&gt;<br></td></tr
><tr
id=sl_svn6061_480><td class="source"> *      &lt;input name=&quot;C&quot; type=&quot;radio&quot; value=&quot;C2&quot; /&gt;<br></td></tr
><tr
id=sl_svn6061_481><td class="source"> *  &lt;/fieldset&gt;&lt;/form&gt;<br></td></tr
><tr
id=sl_svn6061_482><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_483><td class="source"> *  var v = $(&#39;:text&#39;).fieldValue();<br></td></tr
><tr
id=sl_svn6061_484><td class="source"> *  // if no values are entered into the text inputs<br></td></tr
><tr
id=sl_svn6061_485><td class="source"> *  v == [&#39;&#39;,&#39;&#39;]<br></td></tr
><tr
id=sl_svn6061_486><td class="source"> *  // if values entered into the text inputs are &#39;foo&#39; and &#39;bar&#39;<br></td></tr
><tr
id=sl_svn6061_487><td class="source"> *  v == [&#39;foo&#39;,&#39;bar&#39;]<br></td></tr
><tr
id=sl_svn6061_488><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_489><td class="source"> *  var v = $(&#39;:checkbox&#39;).fieldValue();<br></td></tr
><tr
id=sl_svn6061_490><td class="source"> *  // if neither checkbox is checked<br></td></tr
><tr
id=sl_svn6061_491><td class="source"> *  v === undefined<br></td></tr
><tr
id=sl_svn6061_492><td class="source"> *  // if both checkboxes are checked<br></td></tr
><tr
id=sl_svn6061_493><td class="source"> *  v == [&#39;B1&#39;, &#39;B2&#39;]<br></td></tr
><tr
id=sl_svn6061_494><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_495><td class="source"> *  var v = $(&#39;:radio&#39;).fieldValue();<br></td></tr
><tr
id=sl_svn6061_496><td class="source"> *  // if neither radio is checked<br></td></tr
><tr
id=sl_svn6061_497><td class="source"> *  v === undefined<br></td></tr
><tr
id=sl_svn6061_498><td class="source"> *  // if first radio is checked<br></td></tr
><tr
id=sl_svn6061_499><td class="source"> *  v == [&#39;C1&#39;]<br></td></tr
><tr
id=sl_svn6061_500><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_501><td class="source"> * The successful argument controls whether or not the field element must be &#39;successful&#39;<br></td></tr
><tr
id=sl_svn6061_502><td class="source"> * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).<br></td></tr
><tr
id=sl_svn6061_503><td class="source"> * The default value of the successful argument is true.  If this value is false the value(s)<br></td></tr
><tr
id=sl_svn6061_504><td class="source"> * for each element is returned.<br></td></tr
><tr
id=sl_svn6061_505><td class="source"> *<br></td></tr
><tr
id=sl_svn6061_506><td class="source"> * Note: This method *always* returns an array.  If no valid value can be determined the<br></td></tr
><tr
id=sl_svn6061_507><td class="source"> *       array will be empty, otherwise it will contain one or more values.<br></td></tr
><tr
id=sl_svn6061_508><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_509><td class="source">$.fn.fieldValue = function(successful) {<br></td></tr
><tr
id=sl_svn6061_510><td class="source">    for (var val=[], i=0, max=this.length; i &lt; max; i++) {<br></td></tr
><tr
id=sl_svn6061_511><td class="source">        var el = this[i];<br></td></tr
><tr
id=sl_svn6061_512><td class="source">        var v = $.fieldValue(el, successful);<br></td></tr
><tr
id=sl_svn6061_513><td class="source">        if (v === null || typeof v == &#39;undefined&#39; || (v.constructor == Array &amp;&amp; !v.length))<br></td></tr
><tr
id=sl_svn6061_514><td class="source">            continue;<br></td></tr
><tr
id=sl_svn6061_515><td class="source">        v.constructor == Array ? $.merge(val, v) : val.push(v);<br></td></tr
><tr
id=sl_svn6061_516><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_517><td class="source">    return val;<br></td></tr
><tr
id=sl_svn6061_518><td class="source">};<br></td></tr
><tr
id=sl_svn6061_519><td class="source"><br></td></tr
><tr
id=sl_svn6061_520><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_521><td class="source"> * Returns the value of the field element.<br></td></tr
><tr
id=sl_svn6061_522><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_523><td class="source">$.fieldValue = function(el, successful) {<br></td></tr
><tr
id=sl_svn6061_524><td class="source">    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();<br></td></tr
><tr
id=sl_svn6061_525><td class="source">    if (typeof successful == &#39;undefined&#39;) successful = true;<br></td></tr
><tr
id=sl_svn6061_526><td class="source"><br></td></tr
><tr
id=sl_svn6061_527><td class="source">    if (successful &amp;&amp; (!n || el.disabled || t == &#39;reset&#39; || t == &#39;button&#39; ||<br></td></tr
><tr
id=sl_svn6061_528><td class="source">        (t == &#39;checkbox&#39; || t == &#39;radio&#39;) &amp;&amp; !el.checked ||<br></td></tr
><tr
id=sl_svn6061_529><td class="source">        (t == &#39;submit&#39; || t == &#39;image&#39;) &amp;&amp; el.form &amp;&amp; el.form.clk != el ||<br></td></tr
><tr
id=sl_svn6061_530><td class="source">        tag == &#39;select&#39; &amp;&amp; el.selectedIndex == -1))<br></td></tr
><tr
id=sl_svn6061_531><td class="source">            return null;<br></td></tr
><tr
id=sl_svn6061_532><td class="source"><br></td></tr
><tr
id=sl_svn6061_533><td class="source">    if (tag == &#39;select&#39;) {<br></td></tr
><tr
id=sl_svn6061_534><td class="source">        var index = el.selectedIndex;<br></td></tr
><tr
id=sl_svn6061_535><td class="source">        if (index &lt; 0) return null;<br></td></tr
><tr
id=sl_svn6061_536><td class="source">        var a = [], ops = el.options;<br></td></tr
><tr
id=sl_svn6061_537><td class="source">        var one = (t == &#39;select-one&#39;);<br></td></tr
><tr
id=sl_svn6061_538><td class="source">        var max = (one ? index+1 : ops.length);<br></td></tr
><tr
id=sl_svn6061_539><td class="source">        for(var i=(one ? index : 0); i &lt; max; i++) {<br></td></tr
><tr
id=sl_svn6061_540><td class="source">            var op = ops[i];<br></td></tr
><tr
id=sl_svn6061_541><td class="source">            if (op.selected) {<br></td></tr
><tr
id=sl_svn6061_542><td class="source">                // extra pain for IE...<br></td></tr
><tr
id=sl_svn6061_543><td class="source">                var v = $.browser.msie &amp;&amp; !(op.attributes[&#39;value&#39;].specified) ? op.text : op.value;<br></td></tr
><tr
id=sl_svn6061_544><td class="source">                if (one) return v;<br></td></tr
><tr
id=sl_svn6061_545><td class="source">                a.push(v);<br></td></tr
><tr
id=sl_svn6061_546><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_547><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_548><td class="source">        return a;<br></td></tr
><tr
id=sl_svn6061_549><td class="source">    }<br></td></tr
><tr
id=sl_svn6061_550><td class="source">    return el.value;<br></td></tr
><tr
id=sl_svn6061_551><td class="source">};<br></td></tr
><tr
id=sl_svn6061_552><td class="source"><br></td></tr
><tr
id=sl_svn6061_553><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_554><td class="source"> * Clears the form data.  Takes the following actions on the form&#39;s input fields:<br></td></tr
><tr
id=sl_svn6061_555><td class="source"> *  - input text fields will have their &#39;value&#39; property set to the empty string<br></td></tr
><tr
id=sl_svn6061_556><td class="source"> *  - select elements will have their &#39;selectedIndex&#39; property set to -1<br></td></tr
><tr
id=sl_svn6061_557><td class="source"> *  - checkbox and radio inputs will have their &#39;checked&#39; property set to false<br></td></tr
><tr
id=sl_svn6061_558><td class="source"> *  - inputs of type submit, button, reset, and hidden will *not* be effected<br></td></tr
><tr
id=sl_svn6061_559><td class="source"> *  - button elements will *not* be effected<br></td></tr
><tr
id=sl_svn6061_560><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_561><td class="source">$.fn.clearForm = function() {<br></td></tr
><tr
id=sl_svn6061_562><td class="source">    return this.each(function() {<br></td></tr
><tr
id=sl_svn6061_563><td class="source">        $(&#39;input,select,textarea&#39;, this).clearFields();<br></td></tr
><tr
id=sl_svn6061_564><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_565><td class="source">};<br></td></tr
><tr
id=sl_svn6061_566><td class="source"><br></td></tr
><tr
id=sl_svn6061_567><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_568><td class="source"> * Clears the selected form elements.<br></td></tr
><tr
id=sl_svn6061_569><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_570><td class="source">$.fn.clearFields = $.fn.clearInputs = function() {<br></td></tr
><tr
id=sl_svn6061_571><td class="source">    return this.each(function() {<br></td></tr
><tr
id=sl_svn6061_572><td class="source">        var t = this.type, tag = this.tagName.toLowerCase();<br></td></tr
><tr
id=sl_svn6061_573><td class="source">        if (t == &#39;text&#39; || t == &#39;password&#39; || tag == &#39;textarea&#39;)<br></td></tr
><tr
id=sl_svn6061_574><td class="source">            this.value = &#39;&#39;;<br></td></tr
><tr
id=sl_svn6061_575><td class="source">        else if (t == &#39;checkbox&#39; || t == &#39;radio&#39;)<br></td></tr
><tr
id=sl_svn6061_576><td class="source">            this.checked = false;<br></td></tr
><tr
id=sl_svn6061_577><td class="source">        else if (tag == &#39;select&#39;)<br></td></tr
><tr
id=sl_svn6061_578><td class="source">            this.selectedIndex = -1;<br></td></tr
><tr
id=sl_svn6061_579><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_580><td class="source">};<br></td></tr
><tr
id=sl_svn6061_581><td class="source"><br></td></tr
><tr
id=sl_svn6061_582><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_583><td class="source"> * Resets the form data.  Causes all form elements to be reset to their original value.<br></td></tr
><tr
id=sl_svn6061_584><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_585><td class="source">$.fn.resetForm = function() {<br></td></tr
><tr
id=sl_svn6061_586><td class="source">    return this.each(function() {<br></td></tr
><tr
id=sl_svn6061_587><td class="source">        // guard against an input with the name of &#39;reset&#39;<br></td></tr
><tr
id=sl_svn6061_588><td class="source">        // note that IE reports the reset function as an &#39;object&#39;<br></td></tr
><tr
id=sl_svn6061_589><td class="source">        if (typeof this.reset == &#39;function&#39; || (typeof this.reset == &#39;object&#39; &amp;&amp; !this.reset.nodeType))<br></td></tr
><tr
id=sl_svn6061_590><td class="source">            this.reset();<br></td></tr
><tr
id=sl_svn6061_591><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_592><td class="source">};<br></td></tr
><tr
id=sl_svn6061_593><td class="source"><br></td></tr
><tr
id=sl_svn6061_594><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_595><td class="source"> * Enables or disables any matching elements.<br></td></tr
><tr
id=sl_svn6061_596><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_597><td class="source">$.fn.enable = function(b) { <br></td></tr
><tr
id=sl_svn6061_598><td class="source">    if (b == undefined) b = true;<br></td></tr
><tr
id=sl_svn6061_599><td class="source">    return this.each(function() { <br></td></tr
><tr
id=sl_svn6061_600><td class="source">        this.disabled = !b <br></td></tr
><tr
id=sl_svn6061_601><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_602><td class="source">};<br></td></tr
><tr
id=sl_svn6061_603><td class="source"><br></td></tr
><tr
id=sl_svn6061_604><td class="source">/**<br></td></tr
><tr
id=sl_svn6061_605><td class="source"> * Checks/unchecks any matching checkboxes or radio buttons and<br></td></tr
><tr
id=sl_svn6061_606><td class="source"> * selects/deselects and matching option elements.<br></td></tr
><tr
id=sl_svn6061_607><td class="source"> */<br></td></tr
><tr
id=sl_svn6061_608><td class="source">$.fn.selected = function(select) {<br></td></tr
><tr
id=sl_svn6061_609><td class="source">    if (select == undefined) select = true;<br></td></tr
><tr
id=sl_svn6061_610><td class="source">    return this.each(function() { <br></td></tr
><tr
id=sl_svn6061_611><td class="source">        var t = this.type;<br></td></tr
><tr
id=sl_svn6061_612><td class="source">        if (t == &#39;checkbox&#39; || t == &#39;radio&#39;)<br></td></tr
><tr
id=sl_svn6061_613><td class="source">            this.checked = select;<br></td></tr
><tr
id=sl_svn6061_614><td class="source">        else if (this.tagName.toLowerCase() == &#39;option&#39;) {<br></td></tr
><tr
id=sl_svn6061_615><td class="source">            var $sel = $(this).parent(&#39;select&#39;);<br></td></tr
><tr
id=sl_svn6061_616><td class="source">            if (select &amp;&amp; $sel[0] &amp;&amp; $sel[0].type == &#39;select-one&#39;) {<br></td></tr
><tr
id=sl_svn6061_617><td class="source">                // deselect all other options<br></td></tr
><tr
id=sl_svn6061_618><td class="source">                $sel.find(&#39;option&#39;).selected(false);<br></td></tr
><tr
id=sl_svn6061_619><td class="source">            }<br></td></tr
><tr
id=sl_svn6061_620><td class="source">            this.selected = select;<br></td></tr
><tr
id=sl_svn6061_621><td class="source">        }<br></td></tr
><tr
id=sl_svn6061_622><td class="source">    });<br></td></tr
><tr
id=sl_svn6061_623><td class="source">};<br></td></tr
></table></pre>

<pre class="prettyprint lang-js"><table><tr
id=sl_svn6061_624><td class="source"><br></td></tr
><tr
id=sl_svn6061_625><td class="source">// helper fn for console logging<br></td></tr
><tr
id=sl_svn6061_626><td class="source">// set $.fn.ajaxSubmit.debug to true to enable debug logging<br></td></tr
><tr
id=sl_svn6061_627><td class="source">function log() {<br></td></tr
><tr
id=sl_svn6061_628><td class="source">    if ($.fn.ajaxSubmit.debug &amp;&amp; window.console &amp;&amp; window.console.log)<br></td></tr
><tr
id=sl_svn6061_629><td class="source">        window.console.log(&#39;[jquery.form] &#39; + Array.prototype.join.call(arguments,&#39;&#39;));<br></td></tr
><tr
id=sl_svn6061_630><td class="source">};<br></td></tr
><tr
id=sl_svn6061_631><td class="source"><br></td></tr
><tr
id=sl_svn6061_632><td class="source">})(jQuery);<br></td></tr
></table></pre>

<pre class="prettyprint"><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>



 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta('jqueryjs', this)">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta('jqueryjs', this)">Hide details</a>
 </div>
 <div class="ifExpand">
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/jqueryjs/source/detail?spec=svn6247&r=6061">r6061</a>
 by malsup
 on Jan 06, 2009
 &nbsp; <a href="/p/jqueryjs/source/diff?spec=svn6247&r=6061&amp;format=side&amp;path=/trunk/plugins/form/jquery.form.js&amp;old_path=/trunk/plugins/form/jquery.form.js&amp;old=5926">Diff</a>
 </div>
 <pre>Remove @ selector usage</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/jqueryjs/source/detail?r=6061&spec=svn6247';
 var publish_url = '/p/jqueryjs/source/detail?r=6061&spec=svn6247#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/plugins/form/jquery.form.js');
 changed_urls.push('/p/jqueryjs/source/browse/trunk/plugins/form/jquery.form.js?r=6061&spec=svn6247');
 
 var selected_path = '/trunk/plugins/form/jquery.form.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>
 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/jqueryjs/source/browse/trunk/plugins/form/jquery.form.js?r=6061&amp;spec=svn6247"
 selected="selected"
 >/trunk/plugins/form/jquery.form.js</option>
 
 </select>
 </td></tr></table>
 
 
 




 <div style="white-space:nowrap">
 Project members,
 <a href="http://www.google.com/accounts/Login?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fjqueryjs%2Fsource%2Fbrowse%2Ftrunk%2Fplugins%2Fform%2Fjquery.form.js&amp;followup=http%3A%2F%2Fcode.google.com%2Fp%2Fjqueryjs%2Fsource%2Fbrowse%2Ftrunk%2Fplugins%2Fform%2Fjquery.form.js"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/jqueryjs/source/detail?spec=svn6247&r=5926">r5926</a>
 by malsup
 on Nov 06, 2008
 &nbsp; <a href="/p/jqueryjs/source/diff?spec=svn6247&r=5926&amp;format=side&amp;path=/trunk/plugins/form/jquery.form.js&amp;old_path=/trunk/plugins/form/jquery.form.js&amp;old=5889">Diff</a>
 <br>
 <pre class="ifOpened">Add beforeSerialize callback</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/jqueryjs/source/detail?spec=svn6247&r=5889">r5889</a>
 by malsup
 on Oct 17, 2008
 &nbsp; <a href="/p/jqueryjs/source/diff?spec=svn6247&r=5889&amp;format=side&amp;path=/trunk/plugins/form/jquery.form.js&amp;old_path=/trunk/plugins/form/jquery.form.js&amp;old=5888">Diff</a>
 <br>
 <pre class="ifOpened">remove extra semicolon</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/jqueryjs/source/detail?spec=svn6247&r=5888">r5888</a>
 by malsup
 on Oct 17, 2008
 &nbsp; <a href="/p/jqueryjs/source/diff?spec=svn6247&r=5888&amp;format=side&amp;path=/trunk/plugins/form/jquery.form.js&amp;old_path=/trunk/plugins/form/jquery.form.js&amp;old=5887">Diff</a>
 <br>
 <pre class="ifOpened">Added ability to abort file uploads.
demo at: <a href="http://malsup.com/jquery/form">http://malsup.com/jquery/form</a>
/file-upload-cancel.html</pre>
 </div>
 
 
 <a href="/p/jqueryjs/source/list?path=/trunk/plugins/form/jquery.form.js&start=6061">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 23074 bytes,
 632 lines</div>
 
 <div><a href="http://jqueryjs.googlecode.com/svn/trunk/plugins/form/jquery.form.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:keywords</dt>
 <dd>Id</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>
</div>

 <script src="http://www.gstatic.com/codesite/ph/230875406810562827/js/prettify/prettify.js"></script>

<script type="text/javascript">prettyPrint();</script>

<script src="http://www.gstatic.com/codesite/ph/230875406810562827/js/source_file_scripts_20080115.js"></script>

 <style type="text/css">
 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 </style>
 <script type="text/javascript" src="http://kibbles.googlecode.com/files/kibbles-1.3.0.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initilized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initilized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initilized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initilized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 for (var i = 0; i < elements.length; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 window.onload = function() {keysOnLoadHandler();};
 </script>


<!-- code review support -->
<script src="http://www.gstatic.com/codesite/ph/230875406810562827/js/code_review_scripts_20081023.js"></script>
<script type="text/javascript">
 
 // the comment form template
 var form = '<div class="draft"><div class="header"><span class="title">Draft comment:</span></div>' +
 '<div class="body"><form onsubmit="return false;"><textarea id="$ID">$BODY</textarea><br>$ACTIONS</form></div>' +
 '</div>';
 // the comment "plate" template used for both draft and published comment "plates".
 var draft_comment = '<div class="draft" ondblclick="$ONDBLCLICK">' +
 '<div class="header"><span class="title">Draft comment:</span><span class="actions">$ACTIONS</span></div>' +
 '<pre id="$ID" class="body">$BODY</pre>' +
 '</div>';
 var published_comment = '<div class="published">' +
 '<div class="header"><span class="title"><a href="$PROFILE_URL">$AUTHOR:</a></span><div>' +
 '<pre id="$ID" class="body">$BODY</pre>' +
 '</div>';

 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn6061': '/trunk/plugins/form/jquery.form.js'}
 _setup('jqueryjs', 'svn6247', paths, '',
 CR_BrowseIntegrationFactory);
 // register our hidden ui elements with the code commenting code ui builder.
 CR_registerLayoutElement('form', form);
 CR_registerLayoutElement('draft_comment', draft_comment);
 CR_registerLayoutElement('published_comment', published_comment);
 
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_PUB_PLATE, pubRevealed);
 CR_registerActivityListener(CR_ACTIVITY_TYPE.REVEAL_DRAFT_PLATE, draftRevealed);
 CR_registerActivityListener(CR_ACTIVITY_TYPE.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 
 
 var initilized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};
</script>

<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/230875406810562827/js/dit_scripts_20081013.js"></script>

 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/230875406810562827/js/core_scripts_20081103.js"></script>
 
 
 
 
 
 </div>
<div id="footer" dir="ltr">
 
 <div class="text">
 
 &copy;2008 Google -
 <a href="/">Code Home</a> -
 <a href="/tos.html">Terms of Service</a> -
 <a href="http://www.google.com/privacy.html">Privacy Policy</a> -
 <a href="/more/">Site Directory</a>
 
 </div>
</div>
<script type="text/javascript">
/**
 * Reports analytics.
 * It checks for the analytics functionality (window._gat) every 100ms
 * until the analytics script is fully loaded in order to invoke siteTracker.
 */
function _CS_reportAnalytics() {
 window.setTimeout(function() {
 if (window._gat) {
 var siteTracker = _gat._getTracker("UA-18071-1");
 siteTracker._initData();
 siteTracker._trackPageview();
 var projectTracker = _gat._getTracker("UA-1076265-1");
projectTracker._initData();
projectTracker._trackPageview();
 } else {
 _CS_reportAnalytics();
 }
 }, 100);
}
</script>

 
 


 
 </body>
</html>

