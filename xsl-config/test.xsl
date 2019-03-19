<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output method="text" indent="no"/>


  <xsl:template match="/">
        <!-- <xsl:value-of select="concat('test', ',')"/> -->
    <xsl:apply-templates select="./descendant::*[name() = 'DataSet']"/>
  </xsl:template>

  <xsl:template match="DataSet">
    <xsl:variable name="dbname">
        <xsl:value-of select="concat('test', ',')"/>
    </xsl:variable>
  </xsl:template>

  <xsl:variable name="db_desc">
    <xsl:value-of select="//@description"/>
  </xsl:variable>


</xsl:stylesheet>
