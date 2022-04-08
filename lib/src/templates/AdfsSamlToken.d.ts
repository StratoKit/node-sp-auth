export declare const template = "\n  <t:RequestSecurityTokenResponse xmlns:t=\"http://schemas.xmlsoap.org/ws/2005/02/trust\">\n    <t:Lifetime>\n      <wsu:Created xmlns:wsu=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\"><%= created %></wsu:Created>\n      <wsu:Expires xmlns:wsu=\"http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd\"><%= expires %></wsu:Expires>\n    </t:Lifetime>\n    <wsp:AppliesTo xmlns:wsp=\"http://schemas.xmlsoap.org/ws/2004/09/policy\">\n      <wsa:EndpointReference xmlns:wsa=\"http://www.w3.org/2005/08/addressing\">\n        <wsa:Address><%= relyingParty %></wsa:Address>\n      </wsa:EndpointReference>\n    </wsp:AppliesTo>\n    <t:RequestedSecurityToken><%= token %></t:RequestedSecurityToken>\n    <t:TokenType>urn:oasis:names:tc:SAML:1.0:assertion</t:TokenType>\n    <t:RequestType>http://schemas.xmlsoap.org/ws/2005/02/trust/Issue</t:RequestType>\n    <t:KeyType>http://schemas.xmlsoap.org/ws/2005/05/identity/NoProofKey</t:KeyType>\n  </t:RequestSecurityTokenResponse>\n";
