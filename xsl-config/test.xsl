<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:output method="xml" indent="yes"/>


  <xsl:template match="/">
    <db>
      <xsl:apply-templates select="//DataSet"/>
    </db>
  </xsl:template>

  <xsl:template match="DataSet">
    <xsl:variable name="dbname">
        <xsl:value-of select="//@db"/>
    </xsl:variable>
    
    <xsl:element name="{$dbname}">
      <xsl:variable name="db_desc">
        <xsl:value-of select="//@description"/>
      </xsl:variable>
      <description>
        <xsl:value-of select="$db_desc"/>
      </description>
    </xsl:element>

  </xsl:template>

</xsl:stylesheet>
